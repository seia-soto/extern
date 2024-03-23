import {type ErApi} from '../api/index.js';
import {ErUser} from './models/user.js';

export const defaultErClientOptions = {
	cacheThresholds: {
		userStats: 1 * 1000 * 60 * 5, // 5 minutes
	},
};

export class ErClient {
	public users = new Map<number, ErUser>();

	constructor(
		public readonly api: ErApi,
		public readonly options = defaultErClientOptions,
	) {}

	public async getUser(userId: number) {
		if (this.users.has(userId)) {
			return this.users.get(userId)!;
		}

		const user = new ErUser(this, {id: userId});

		this.users.set(userId, user);

		return user;
	}
}
