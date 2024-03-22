export type ErEmptyResponse = {
	code: number;
	message: string;
};

export type ErResponse<T> = ErEmptyResponse & {
	data: T;
};
