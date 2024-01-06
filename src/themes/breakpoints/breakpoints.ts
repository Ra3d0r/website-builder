import { createTheme } from '@mui/material';
import { createBreakpoints } from '@mui/system';

declare module '@mui/system' {
	interface BreakpointOverrides {
		mobile: true;
		tablet: true;
		laptop: true;
		desktop: true;
	}
}

const defaultTheme = createTheme();

export const Breakpoints = createBreakpoints({
	values: {
		...defaultTheme.breakpoints.values,
		mobile: 640,
		tablet: 1024,
		laptop: 1440,
		desktop: 1920,
	},
});
