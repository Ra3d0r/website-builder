import { createTheme } from '@mui/material';
import { Breakpoints } from './breakpoints';
import {
	Button,
	Card,
	CircularProgress,
	Container,
	FormHelperText,
	Input,
	Typography,
	formLabelsTheme,
} from './components';
import { Palette } from './palette';

export const AppTheme = createTheme(
	Palette,
	Button,
	Container,
	formLabelsTheme,
	Card,
	Typography,
	Input,
	FormHelperText,
	CircularProgress,
	{
		...Breakpoints,
	},
);
