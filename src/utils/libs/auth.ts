import { db } from '@/db';
import { ENV_CONFIG } from '@/utils';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { compare } from 'bcryptjs';
import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(db),
	session: {
		strategy: 'jwt',
	},
	pages: {
		signIn: '/auth/login',
	},
	secret: ENV_CONFIG.nextAuthSecret,
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: { label: 'email', type: 'text' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials) {
				if (!credentials?.email || !credentials?.password) {
					return null;
				}

				const existingUser = await db.user.findUnique({
					where: { email: credentials.email },
				});

				if (!existingUser) {
					return null;
				}

				const passwordMatch = await compare(credentials.password, existingUser.password);

				if (!passwordMatch) {
					return null;
				}

				return {
					id: `${existingUser.id}`,
					email: existingUser.email,
					name: existingUser.userName,
					image: null,
				};
			},
		}),
	],
};
