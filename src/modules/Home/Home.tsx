import { ContainerCard } from '@/components';
import { Box, Button, CircularProgress, Typography } from '@mui/material';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import type { FunctionComponent } from 'react';

const Home: FunctionComponent = () => {
	const { data, status } = useSession();

	return (
		<ContainerCard role="flexCenter">
			<Typography variant="h6" component="h6" color="white">
				Home page.{' '}
				{status !== 'loading' ? (data ? ' authenticated' : 'unauthenticated') : 'loading...'}
			</Typography>
			{status === 'loading' && <CircularProgress />}
			{!data && status === 'unauthenticated' && (
				<Box display="flex" gap="20px" marginTop="20px">
					<Link href={'/auth/register'}>
						<Button color="slate" variant="base">
							Register
						</Button>
					</Link>
					<Link href={'/auth/login'}>
						<Button color="slate" variant="base">
							Login
						</Button>
					</Link>
				</Box>
			)}
			{data && status === 'authenticated' && (
				<Link href={'/user'}>
					<Button color="slate" variant="base">
						User
					</Button>
				</Link>
			)}
		</ContainerCard>
	);
};

export { Home };
