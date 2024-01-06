import { createTheme } from '@mui/material';

type PaletteCustom = {
	'100': string;
	'200': string;
	'300': string;
	'400': string;
	'500': string;
	'600': string;
	'700': string;
	'800': string;
	'900': string;
};

declare module '@mui/material/styles' {
	interface Palette {
		slate: Palette['primary'] & PaletteCustom;
		greyNeutral: Palette['primary'] & PaletteCustom;
		red: Palette['primary'] & PaletteCustom;
	}

	interface PaletteOptions {
		slate?: PaletteOptions['primary'];
		greyNeutral?: PaletteOptions['primary'];
		red?: PaletteOptions['primary'];
	}
}

export const Palette = createTheme({
	palette: {
		mode: 'dark',
		slate: {
			main: '#e2e8f0',
			dark: '#020617',
			light: '##f8fafc',
			'100': '#f1f5f9',
			'200': '#e2e8f0',
			'300': '#cbd5e1',
			'400': '#94a3b8',
			'500': '#64748b',
			'600': '#475569',
			'700': '#334155',
			'800': '#1e293b',
			'900': '#0f172a',
		},
		greyNeutral: {
			main: '#333333',
			dark: '#030712',
			light: '#f8f8f8',
			'100': '#f3f4f6',
			'200': '#e5e7eb',
			'300': '#d1d5db',
			'400': '#9ca3af',
			'500': '#6b7280',
			'600': '#4b5563',
			'700': '#374151',
			'800': '#1f2937',
			'900': '#111827',
		},
		red: {
			light: '#fef2f2',
			dark: '#450a0a',
			100: '#fee2e2',
			200: '#fecaca',
			300: '#fca5a5',
			400: '#f87171',
			500: '#ef4444',
			600: '#dc2626',
			700: '#b91c1c',
			800: '#991b1b',
			900: '#7f1d1d',
		},
	},
});
