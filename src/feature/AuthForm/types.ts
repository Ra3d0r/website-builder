import type { AuthForm } from '@/types';
import type { FieldValues, UseFormProps } from 'react-hook-form';

export interface AuthFormProps<T extends FieldValues> {
	onSubmit: (data: T) => Promise<void>;
	title: string;
	rhfOptions: UseFormProps<T>;
	inputs: Array<AuthForm<T>>;
}
