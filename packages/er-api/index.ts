import Ky, {type KyInstance} from 'ky';
import {getMetaData, getMetaTypes} from './routes/getMetaType.js';

type Fn = (...args: any[]) => Promise<any>;

export class ErClientQueue {
	public readonly limit: {
		size: number;
		period: number;
	};

	private lastProcessTime = -1;
	private usedBudgetInTimespan = 0;

	private readonly queue: Fn[] = [];
	private isLocked = false;

	constructor(limit: {size: number; period: number}) {
		this.limit = limit;
	}

	public async enqueue(f: Fn) {
		this.queue.push(f);

		void this.tryProcess();
	}

	public async dequeue(f: Fn) {
		const index = this.queue.indexOf(f);

		if (index !== -1) {
			this.queue.splice(index, 1);
		}
	}

	private async sleep(time: number) {
		return new Promise(resolve => {
			setTimeout(() => {
				resolve(null);
			}, time);
		});
	}

	private async process() {
		const sinceLastProcessTime = Date.now() - this.lastProcessTime;

		if (
			this.limit.size <= this.usedBudgetInTimespan
			&& this.limit.period > sinceLastProcessTime
		) {
			await this.sleep(this.limit.period - sinceLastProcessTime);

			this.usedBudgetInTimespan = 0;
		}

		const cb = this.queue.pop();

		if (!cb) {
			return false;
		}

		void cb();

		this.lastProcessTime = Date.now();
		this.usedBudgetInTimespan += 1;

		return true;
	}

	private async tryProcess() {
		if (this.isLocked) {
			return;
		}

		this.isLocked = true;

		for (; ;) {
			// eslint-disable-next-line no-await-in-loop
			if (!await this.process()) {
				break;
			}
		}

		this.isLocked = false;
	}
}

export class ErClient {
	public fetcher: KyInstance;
	public queue: ErClientQueue;

	public getMetaTypes: typeof getMetaTypes;
	public getMetaData: typeof getMetaData;

	constructor(
		apiKey: string = process.env.ER_API_KEY ?? '',
		options: {
			queue: ErClientQueue;
		} = {
			queue: new ErClientQueue({
				size: 1,
				period: 1 * 1000,
			}),
		},
	) {
		this.fetcher = Ky.extend({
			prefixUrl: 'https://open-api.bser.io/v1',
			headers: {
				accept: 'application/json',
				'user-agent': 'er-api/v0 (node; seia-soto) ky/v1',
				'x-api-key': apiKey,
			},
		});
		this.queue = options.queue;

		this.getMetaTypes = this.createRateLimitedFunction(getMetaTypes);
		this.getMetaData = this.createRateLimitedFunction(getMetaData);
	}

	private createRateLimitedFunction<T extends Fn, R = Awaited<ReturnType<T>>>(fn: T) {
		const callee = fn.bind(this);
		const wrapper = async (...args: Parameters<T>): Promise<R> => new Promise<R>((resolve, reject) => {
			const callback = async () => {
				callee(...args)
					.then(r => {
						resolve(r as R);
					})
					.catch((e: Error) => {
						reject(e);
					});
			};

			void this.queue.enqueue(callback);
		});

		return wrapper;
	}
}
