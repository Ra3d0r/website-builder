import type { UserLogin, UserRegister } from '@/api';
import { object, string, type ObjectSchema } from 'yup';

export const createUserSchema: ObjectSchema<UserRegister> = object().shape({
	email: string().email('Invalid email').required('Email is required'),
	password: string().required('Password is required'),
	userName: string().required('Username is required'),
});

export const loginUserSchema: ObjectSchema<UserLogin> = object().shape({
	email: string().email('Invalid email').required('Email is required'),
	password: string().required('Password is required'),
});
