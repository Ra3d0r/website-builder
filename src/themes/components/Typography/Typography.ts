import { Palette } from '@/themes/palette';
import { createTheme } from '@mui/material';
const { slate, red } = Palette.palette;

export const Typography = createTheme({
	components: {
		MuiTypography: {
			variants: [
				{
					props: { variant: 'caption', color: 'red' },
					style: {
						color: red[500],
					},
				},
			],
			defaultProps: {
				color: slate[100],
			},
		},
	},
});
