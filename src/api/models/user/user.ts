export interface UserRegister {
	email: string;
	password: string;
	userName: string;
}

export interface UserResponse {
	user: User | null;
	message: string;
	errorType?: string;
}

export interface User {
	id: number;
	email: string;
	userName: string;
	createAt: Date;
	updateAt: Date;
}

export interface UserLogin {
	email: string;
	password: string;
}
