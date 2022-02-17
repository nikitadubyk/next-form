import type { NextApiRequest, NextApiResponse } from 'next'
import { users } from './data/users'
import { changeUsersDatabase } from '../../lib/changeUsersDatabase'
const bcrypt = require('bcryptjs')

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        const user = req.body
        const hash = bcrypt.hashSync(user.password, 5)
        user.password = hash
        users.push(user)
        changeUsersDatabase(users)
        return res.status(200).json({})
    }
}
