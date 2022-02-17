import type { NextApiRequest, NextApiResponse } from 'next'
import { users } from '../../data/users'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'GET') {
        const { userEmail } = req.query
        const user = users.find(user => user.email === userEmail)
        res.status(200).json(user)
    }
}
