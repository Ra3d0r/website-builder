import { SeoHead } from '@/feature';
import { Home, Layout } from '@/modules';
import type { ReactElement } from 'react';

const HomePage = () => {
	return <Home />;
};

HomePage.getLayout = function getLayout(page: ReactElement) {
	return (
		<>
			<SeoHead title="Home" />
			<Layout>{page}</Layout>
		</>
	);
};

export default HomePage;
