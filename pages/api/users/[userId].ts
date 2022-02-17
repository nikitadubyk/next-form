import type { NextApiRequest, NextApiResponse } from 'next'
import { users } from '../data/users'
import { changeUsersDatabase } from '../../../lib/changeUsersDatabase'
const bcrypt = require('bcryptjs')

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const { userId } = req.query
        const user = users.find(user => user.id === userId)
        res.status(200).json(user)
    } else if (req.method === 'PATCH') {
        const { userId } = req.query
        const data = req.body

        const hash = bcrypt.hashSync(data.password, 5)

        const patchUser = users.filter(user => user.id === userId)
        patchUser[0].password = hash

        changeUsersDatabase(users)

        res.status(200).json(patchUser)
    }
}
