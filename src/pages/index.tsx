import { SeoHead } from '@/feature';
import { Home, Layout } from '@/modules';

const HomePage = () => {
	return (
		<>
			<SeoHead title="Home" />
			<Layout>
				<Home />
			</Layout>
		</>
	);
};

export default HomePage;
