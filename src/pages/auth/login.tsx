import { SeoHead } from '@/feature/SeoHead/SeoHead';
import { Layout, SignIn } from '@/modules';

export default function LoginPage() {
	return (
		<>
			<SeoHead title="Login user" />
			<Layout>
				<SignIn />
			</Layout>
		</>
	);
}
