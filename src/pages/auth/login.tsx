import { SeoHead } from '@/feature';
import { Layout, SignIn } from '@/modules';
import type { ReactElement } from 'react';

export default function LoginPage() {
	return <SignIn />;
}

LoginPage.getLayout = function getLayout(page: ReactElement) {
	return (
		<>
			<SeoHead title="Login user" />
			<Layout>{page}</Layout>
		</>
	);
};
