import { SeoHead } from '@/feature/SeoHead/SeoHead';
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
