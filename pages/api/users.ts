import type { NextApiRequest, NextApiResponse } from 'next'
import { createUser } from './data/users'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        createUser(req.body)
        return res.status(200).json({})
    }
}
