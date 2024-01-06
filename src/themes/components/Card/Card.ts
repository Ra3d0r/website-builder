import { Palette } from '@/themes/palette';
import { createTheme } from '@mui/material';

const { greyNeutral } = Palette.palette;

export const Card = createTheme({
	components: {
		MuiCard: {
			styleOverrides: {
				root: {
					backgroundColor: greyNeutral.main,
				},
			},
		},
	},
});
