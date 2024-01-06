import { ContainerCard } from '@/components';
import { Button, Typography } from '@mui/material';
import { signOut } from 'next-auth/react';
import type { FunctionComponent } from 'react';
import type { UserProps } from './type';

const User: FunctionComponent<UserProps> = ({ session }) => {
	return (
		<ContainerCard role="flexCenter">
			<Typography variant="h6" component="h6" color="white">
				Welcome back, {session?.user?.name}
			</Typography>
			<Button color="slate" variant="base" onClick={() => signOut({ callbackUrl: '/' })}>
				signOut
			</Button>
		</ContainerCard>
	);
};

export { User };
