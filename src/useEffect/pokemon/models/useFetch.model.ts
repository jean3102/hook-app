export interface UseFetchModel<T> {
	response: T | null;
	loading: boolean;
	error: string | null;
}

export type CatchResponse<T> = {
	[key: string]: T;
};
