import { Checkbox } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import type { CheckboxControlProps } from './type';

export const CheckboxControl = ({ hookFormProps, ...props }: CheckboxControlProps) => {
	const { control } = useFormContext<{ [key: string]: string }>();

	return (
		<Controller
			name={hookFormProps.name}
			control={control}
			render={({ field }) => <Checkbox {...field} {...props} />}
		/>
	);
};
