import { Palette } from '@/themes/palette';
import { createTheme } from '@mui/material';

const { greyNeutral, red } = Palette.palette;

export const formLabelsTheme = createTheme({
	components: {
		MuiFormLabel: {
			styleOverrides: {
				root: {
					color: greyNeutral[300],
					'&.Mui-focused': {
						color: greyNeutral[300],
					},
					'&.Mui-error': {
						color: red[500],
					},
					'&.Mui-disabled': {
						color: greyNeutral[400],
					},
				},
				asterisk: {
					color: red[500],
					'&$error': {
						color: red[500],
					},
				},
			},
		},
	},
});
