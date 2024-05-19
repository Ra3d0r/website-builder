import type { UserLogin } from '@/api';
import { AuthForm, useFormRef } from '@/feature';
import { useCustomRouter } from '@/hooks';
import { loginUserSchema } from '@/schemas';
import type { AuthForm as AuthFormType } from '@/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { signIn } from 'next-auth/react';
import type { UseFormProps } from 'react-hook-form';

const userInputs: Array<AuthFormType<UserLogin>> = [
	{
		name: 'email',
		label: 'Email',
		type: 'email',
	},
	{
		name: 'password',
		label: 'Password',
		type: 'password',
	},
];

const rhfOptions: UseFormProps<UserLogin> = {
	resolver: yupResolver(loginUserSchema),
	mode: 'onBlur',
	defaultValues: {
		email: '',
		password: '',
	},
};

const SignIn = () => {
	const formRef = useFormRef<UserLogin>();
	const { shallowPush } = useCustomRouter();

	const createUser = async (data: UserLogin) => {
		const signInData = await signIn('credentials', {
			email: data.email,
			password: data.password,
			redirect: false,
		});

		if (signInData?.error) {
			formRef.current?.methods.setError('root', {
				type: 'server',
				message: 'Invalid email or password',
			});
			return;
		}

		shallowPush('/');
	};

	return (
		<AuthForm<UserLogin>
			onSubmit={createUser}
			title="Sign In"
			inputs={userInputs}
			rhfOptions={rhfOptions}
			ref={formRef}
		/>
	);
};

export { SignIn };
