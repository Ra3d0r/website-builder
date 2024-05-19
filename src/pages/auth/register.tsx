import { SeoHead } from '@/feature';
import { Layout, SignUp } from '@/modules';
import type { ReactElement } from 'react';

export default function RegisterPage() {
	return <SignUp />;
}

RegisterPage.getLayout = function getLayout(page: ReactElement) {
	return (
		<>
			<SeoHead title="Register page" />
			<Layout>{page}</Layout>
		</>
	);
};
