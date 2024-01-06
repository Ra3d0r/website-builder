import { Palette } from '@/themes/palette';
import { createTheme } from '@mui/material';

const { red } = Palette.palette;

export const FormHelperText = createTheme({
	components: {
		MuiFormHelperText: {
			styleOverrides: {
				root: {
					'&.MuiFormHelperText-root.Mui-error': {
						color: red[500],
					},
				},
			},
		},
	},
});
