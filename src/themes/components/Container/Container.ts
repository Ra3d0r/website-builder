import { createTheme } from '@mui/material';

export const Container = createTheme({
	components: {
		MuiContainer: {
			variants: [
				{
					props: { role: 'flexCenter' },
					style: {
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						height: '100vh',
					},
				},
			],
		},
	},
});
