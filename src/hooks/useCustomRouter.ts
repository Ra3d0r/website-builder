import { useRouter } from 'next/router';

const useCustomRouter = () => {
	const router = useRouter();

	const shallowPush = (url: string, scroll?: boolean) => {
		router.push(url, undefined, { shallow: true, scroll: !!scroll });
	};

	return { shallowPush };
};

export { useCustomRouter };
