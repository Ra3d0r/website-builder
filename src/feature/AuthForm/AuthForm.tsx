import { ContainerCard, TextFiledControl } from '@/components';
import { Box, Button, CircularProgress, Typography } from '@mui/material';
import { forwardRef, useImperativeHandle, type ReactElement, type Ref } from 'react';
import { FormProvider, useForm, type FieldValues, type UseFormReturn } from 'react-hook-form';
import type { AuthFormProps } from './types';

function Auth<T extends FieldValues>(
	{ onSubmit, title, rhfOptions, inputs }: AuthFormProps<T>,
	ref: Ref<{ methods: UseFormReturn<T> }>,
) {
	const methods = useForm<T>(rhfOptions);

	useImperativeHandle(
		ref,
		() => ({
			methods,
		}),
		[methods],
	);

	const { isValid, isSubmitting, errors } = methods.formState;

	return (
		<ContainerCard role="flexCenter" maxWidth="md">
			<Typography variant="h6" component="h6">
				{title}
			</Typography>
			{errors.root && (
				<Typography variant="caption" component="p" color="red" sx={{ fontSize: '14px' }}>
					{errors.root.message}
				</Typography>
			)}
			<FormProvider {...methods}>
				<Box
					component="form"
					display="flex"
					flexDirection="column"
					gap="20px"
					marginTop="20px"
					onSubmit={methods.handleSubmit(onSubmit)}
					ref={ref}
				>
					{inputs.map((input) => (
						<TextFiledControl
							key={input.name}
							name={input.name}
							hookFormProps={{ name: input.name }}
							variant="outlined"
							label={input.label}
							type={input.type}
							required
							disabled={isSubmitting}
						/>
					))}
					<Button type="submit" color="slate" variant="base" disabled={isSubmitting || !isValid}>
						{isSubmitting && <CircularProgress size={25} />}
						{!isSubmitting && 'Submit'}
					</Button>
				</Box>
			</FormProvider>
		</ContainerCard>
	);
}

type typeUser = <T extends FieldValues>(
	p: AuthFormProps<T> & {
		ref?: Ref<{ methods: UseFormReturn<T> }>;
	},
) => ReactElement;

export const AuthForm = forwardRef(Auth) as typeUser;
