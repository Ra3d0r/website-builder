import { SeoHead } from '@/feature';
import { Layout, User } from '@/modules';
import { authOptions } from '@/utils';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { getServerSession, type Session } from 'next-auth';
import type { ReactElement } from 'react';

const UserPage = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	return <User {...props} />;
};

UserPage.getLayout = function getLayout(page: ReactElement) {
	return (
		<>
			<SeoHead title="User page" />
			<Layout>{page}</Layout>
		</>
	);
};

export const getServerSideProps: GetServerSideProps<{ session: Session }> = async (context) => {
	const session = await getServerSession(context.req, context.res, authOptions);

	if (!session) {
		return {
			redirect: {
				destination: '/',
				permanent: false,
			},
		};
	}

	return {
		props: {
			session,
		},
	};
};

export default UserPage;
