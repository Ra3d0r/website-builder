import { TextField } from '@mui/material';
import { Controller, get, useFormContext } from 'react-hook-form';
import type { TextFiledControlProps } from './types';

export const TextFiledControl = ({ hookFormProps, ...props }: TextFiledControlProps) => {
	const {
		control,
		formState: { errors },
	} = useFormContext<{ [key: string]: string }>();

	const error = get(errors, hookFormProps.name);
	const errMsg = error ? error.message : '';

	return (
		<Controller
			name={hookFormProps.name}
			control={control}
			render={({ field: { ref, value, onChange, onBlur } }) => (
				<TextField
					ref={ref}
					onBlur={onBlur}
					onChange={onChange}
					value={value}
					error={!!errMsg}
					helperText={errMsg}
					{...props}
				/>
			)}
		/>
	);
};
