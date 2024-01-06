import { Card, CardContent, Container } from '@mui/material';
import type { FunctionComponent, PropsWithChildren } from 'react';
import type { ContainerCardProps } from './type';

export const ContainerCard: FunctionComponent<PropsWithChildren<ContainerCardProps>> = ({
	children,
	maxWidth,
	sx,
	role,
}) => {
	return (
		<Container maxWidth={maxWidth} sx={sx} role={role}>
			<Card sx={{ width: '100%' }}>
				<CardContent>{children}</CardContent>
			</Card>
		</Container>
	);
};
