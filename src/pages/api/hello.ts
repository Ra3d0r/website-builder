// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
	name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	switch (req.method) {
		case 'GET':
			return GET(req, res);
		default:
			return res.status(405).json({ name: 'Method Not Allowed' });
	}
}

function GET(req: NextApiRequest, res: NextApiResponse<Data>) {
	res.status(200).json({ name: 'John Doe' });
}
