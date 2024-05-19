import { SeoHead } from '@/feature';
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
