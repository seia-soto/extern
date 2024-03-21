export type EmptyErResponse = {
	code: number;
	message: string;
};

export type ErResponse<T> = EmptyErResponse & {
	data: T;
};
