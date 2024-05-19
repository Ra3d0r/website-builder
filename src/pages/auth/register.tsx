import { SeoHead } from '@/feature';
import { Layout, SignUp } from '@/modules';

export default function RegisterPage() {
	return (
		<>
			<SeoHead title="Register page" />
			<Layout>
				<SignUp />
			</Layout>
		</>
	);
}
