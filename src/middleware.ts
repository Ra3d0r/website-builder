import { getToken } from 'next-auth/jwt';
import { NextResponse, type NextRequest } from 'next/server';

export default async function middleware(req: NextRequest) {
	const token = await getToken({ req });
	const isAuthenticated = !!token;

	if (req.nextUrl.pathname.startsWith('/auth') && isAuthenticated) {
		return NextResponse.redirect(new URL('/user', req.url));
	}

	return NextResponse.next();
}
