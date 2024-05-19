import { Palette } from '@/themes/palette';
import { createTheme } from '@mui/material';

const { greyNeutral, slate, red } = Palette.palette;

export const Input = createTheme({
	components: {
		MuiInputBase: {
			styleOverrides: {
				root: {
					color: slate[200],
					'&.Mui-disabled': {
						color: greyNeutral[400],
					},
					'&.Mui-error': {
						color: red[500],
					},
				},
				input: {
					'&.Mui-disabled': {
						textFillColor: greyNeutral[400],
					},
				},
			},
		},
		MuiOutlinedInput: {
			styleOverrides: {
				notchedOutline: {
					borderColor: slate[600],
				},
				root: {
					'&:hover .MuiOutlinedInput-notchedOutline': {
						borderColor: greyNeutral[300],
					},
					'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
						borderColor: greyNeutral[300],
					},
					'&.Mui-error .MuiOutlinedInput-notchedOutline': {
						borderColor: red[500],
					},
					'&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
						borderColor: greyNeutral[400],
					},
				},
			},
		},
	},
});
