import type { Breakpoint, SxProps, Theme } from '@mui/material';

export interface ContainerCardProps {
	maxWidth?: Breakpoint;
	sx?: SxProps<Theme>;
	role?: 'flexCenter';
}
