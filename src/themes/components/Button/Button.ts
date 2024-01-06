import { Breakpoints } from '@/themes/breakpoints';
import { Palette } from '@/themes/palette';
import { createTheme } from '@mui/material';

declare module '@mui/material/Button' {
	interface ButtonPropsVariantOverrides {
		base: true;
		outline: true;
		outlined: false;
		text: false;
		contained: false;
	}

	interface ButtonPropsSizeOverrides {
		md: true;
		small: false;
		medium: false;
		large: false;
	}

	interface ButtonPropsColorOverrides {
		slate: true;
		greyNeutral: true;
		error: false;
		secondary: false;
		info: false;
		success: false;
		warning: false;
	}
}

const { slate, greyNeutral } = Palette.palette;

export const Button = createTheme({
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: 8,
					padding: '8px 12px',

					[Breakpoints.down('tablet')]: {
						borderRadius: 6,
						padding: '4px 8px',
					},
				},
			},
			variants: [
				{
					props: { variant: 'base', color: 'slate' },
					style: {
						color: greyNeutral.main,
						backgroundColor: slate.main,
						':hover': {
							backgroundColor: slate[300],
						},
						'&.Mui-disabled': {
							color: greyNeutral[400],
							backgroundColor: slate[600],
							':hover': {
								backgroundColor: slate[600],
							},
						},
					},
				},
				{
					props: { variant: 'outline', color: 'slate' },
					style: {
						color: slate.main,
						backgroundColor: 'transparent',
						border: `2px solid ${slate.main}`,
						':hover': {
							backgroundColor: slate[300],
							color: 'black',
						},
					},
				},
			],
			defaultProps: {
				variant: 'base',
				color: 'slate',
				size: 'md',
				disableRipple: true,
				disableTouchRipple: true,
			},
		},
	},
});
