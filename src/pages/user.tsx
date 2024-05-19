import { SeoHead } from '@/feature';
import { Layout, User } from '@/modules';
import { authOptions } from '@/utils';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { getServerSession, type Session } from 'next-auth';

const UserPage = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	return (
		<>
			<SeoHead title="User page" />
			<Layout>
				<User {...props} />
			</Layout>
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
