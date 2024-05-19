import type { UserRegister, UserResponse } from '@/api';
import { db } from '@/db';
import { hash } from 'bcryptjs';
import type { NextApiRequest, NextApiResponse } from 'next';

interface NextApiRequestUser extends NextApiRequest {
	body: UserRegister;
}

export default function handler(req: NextApiRequestUser, res: NextApiResponse<UserResponse>) {
	switch (req.method) {
		case 'POST':
			return POST(req, res);
		default:
			return res.status(405).json({ user: null, message: 'Method Not Allowed' });
	}
}

async function POST(req: NextApiRequestUser, res: NextApiResponse<UserResponse>) {
	try {
		const { email, password, userName } = req.body;

		const existingUserByEmail = await db.user.findUnique({ where: { email } });

		if (existingUserByEmail) {
			return res
				.status(409)
				.json({ user: null, message: 'Email already exists', errorType: 'email' });
		}

		const existingUserByUserName = await db.user.findUnique({ where: { userName } });

		if (existingUserByUserName) {
			return res
				.status(409)
				.json({ user: null, message: 'Username already exists', errorType: 'userName' });
		}

		const hashedPassword = await hash(password, 10);

		const newUser = await db.user.create({
			data: {
				email,
				password: hashedPassword,
				userName,
			},
		});

		const { password: _, ...user } = newUser;

		return res.status(200).json({ user, message: 'User created successfully' });
	} catch (err) {
		return res.status(500).json({ user: null, message: 'Something went wrong' });
	}
}
