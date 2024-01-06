import { AppTheme } from '@/themes';
import { ThemeProvider } from '@mui/material';
import type { FunctionComponent, PropsWithChildren } from 'react';

const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => {
	return <ThemeProvider theme={AppTheme}>{children}</ThemeProvider>;
};

export { Layout };
