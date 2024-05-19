import type { UserRegister } from '@/api';
import api from '@/api/instance';
import { AuthForm, useFormRef } from '@/feature';
import { useCustomRouter } from '@/hooks';
import { createUserSchema } from '@/schemas';
import type { AuthForm as AuthFormType } from '@/types';
import { yupResolver } from '@hookform/resolvers/yup';
import type { UseFormProps } from 'react-hook-form';

const userInputs: Array<AuthFormType<UserRegister>> = [
	{
		name: 'email',
		label: 'Email',
		type: 'email',
	},
	{
		name: 'userName',
		label: 'User name',
		type: 'text',
	},
	{
		name: 'password',
		label: 'Password',
		type: 'password',
	},
];

const rhfOptions: UseFormProps<UserRegister> = {
	resolver: yupResolver(createUserSchema),
	mode: 'onBlur',
	defaultValues: {
		email: '',
		userName: '',
		password: '',
	},
};

const SignUp = () => {
	const formRef = useFormRef<UserRegister>();
	const { shallowPush } = useCustomRouter();
	const createUser = (data: UserRegister) =>
		api
			.post('/user', data)
			.then(() => {
				const { methods } = formRef?.current || {};
				methods?.reset();
				shallowPush('/auth/login');
			})
			.catch((err) => {
				const errorType = err?.response?.data?.errorType;
				if (!errorType || !formRef?.current) {
					return;
				}

				const { methods } = formRef?.current || {};
				methods?.setError(errorType, {
					type: 'server',
					message: err?.response?.data?.message,
				});
			});

	return (
		<AuthForm<UserRegister>
			onSubmit={createUser}
			title="Sign Up"
			inputs={userInputs}
			rhfOptions={rhfOptions}
			ref={formRef}
		/>
	);
};

export { SignUp };
