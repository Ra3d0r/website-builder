import { AppTheme } from '@/themes';
import { ThemeProvider } from '@mui/material';
import { Inter } from 'next/font/google';
import type { FunctionComponent, PropsWithChildren } from 'react';

const inter = Inter({ subsets: ['latin'] });

const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => {
	return (
		<ThemeProvider theme={AppTheme}>
			<main className={`${inter.className}`}>{children}</main>
		</ThemeProvider>
	);
};

export { Layout };
