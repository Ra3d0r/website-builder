export interface AuthForm<T> {
	name: keyof T extends string ? keyof T : never;
	label: string;
	type: string;
}
