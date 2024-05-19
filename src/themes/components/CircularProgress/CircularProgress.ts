import { Palette } from '@/themes/palette';
import { createTheme } from '@mui/material';

const { slate } = Palette.palette;

export const CircularProgress = createTheme({
	components: {
		MuiCircularProgress: {
			styleOverrides: {
				root: {
					color: slate.main,
				},
			},
		},
	},
});
