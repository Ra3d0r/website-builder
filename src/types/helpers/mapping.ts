export type ObjectFromKeys<T, N> = {
	[Property in keyof T]: N;
};
