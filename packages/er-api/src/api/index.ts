import Ky, {type KyInstance} from 'ky';
import {type KyOptions} from 'ky/distribution/types/options.js';
import {getMatchesByMatchId, getMatchesByUserId} from './records/match.js';
import {getLeaderboard, getRankByUserId} from './records/rank.js';
import {getRecommendedRoutes, getRoute} from './records/route.js';
import {getUser, getUserIdByNickname} from './records/user.js';
import {getFreeCharacters} from './statics/getFreeCharacters.js';
import {getMetaData, getMetaTypes} from './statics/getMetaType.js';
import {getTranslationPath} from './statics/getTranslations.js';

type Fn = (...args: any[]) => Promise<any>;

export class ErApiQueue {
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
			if (!await this.process()) {
				break;
			}
		}

		this.isLocked = false;
	}
}

export class ErApi {
	public fetcher: KyInstance;
	public queue?: ErApiQueue;

	// Match
	public getMatchesByUserId: typeof getMatchesByUserId = this.createRateLimitedFunction(getMatchesByUserId);
	public getMatchesByMatchId: typeof getMatchesByMatchId = this.createRateLimitedFunction(getMatchesByMatchId);

	// Rank
	public getRankByUserId: typeof getRankByUserId = this.createRateLimitedFunction(getRankByUserId);
	public getLeaderboard: typeof getLeaderboard = this.createRateLimitedFunction(getLeaderboard);

	// Route
	public getRoute: typeof getRoute = this.createRateLimitedFunction(getRoute);
	public getRecommendedRoutes: typeof getRecommendedRoutes = this.createRateLimitedFunction(getRecommendedRoutes);

	// User
	public getUserByNickname: typeof getUserIdByNickname = this.createRateLimitedFunction(getUserIdByNickname);
	public getUser: typeof getUser = this.createRateLimitedFunction(getUser);

	// Statics
	public getFreeCharacters: typeof getFreeCharacters = this.createRateLimitedFunction(getFreeCharacters);
	public getMetaTypes: typeof getMetaTypes = this.createRateLimitedFunction(getMetaTypes);
	public getMetaData: typeof getMetaData = this.createRateLimitedFunction(getMetaData);
	public getTranslationPath: typeof getTranslationPath = this.createRateLimitedFunction(getTranslationPath);

	constructor(
		apiKey: string = process.env.ER_API_KEY ?? '',
		options: {
			queue?: ErApiQueue;
			fetcherOptions?: KyOptions;
		} = {
			queue: new ErApiQueue({
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

		if (options.fetcherOptions !== undefined) {
			this.fetcher = this.fetcher.extend(options.fetcherOptions);
		}

		if (options.queue !== undefined) {
			this.queue = options.queue;
		}
	}

	private createRateLimitedFunction<T extends Fn, R = Awaited<ReturnType<T>>>(fn: T) {
		const callee = fn.bind(this);

		const wrapper = async (...args: Parameters<T>): Promise<R> => new Promise<R>((resolve, reject) => {
			if (!this.queue) {
				resolve(callee(...args));

				return;
			}

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
