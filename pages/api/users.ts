import type { NextApiRequest, NextApiResponse } from 'next'
// import { users } from './data/users'
import { createUser } from './data/users'
import { changeUsersDatabase } from '../../lib/changeUsersDatabase'
const bcrypt = require('bcryptjs')

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    // if (req.method === 'GET') {
    //     return res.status(200).json(users)
    // }
    if (req.method === 'POST') {
        createUser(req.body)
        console.log('Users.ts in API', req.body)
        // changeUsersDatabase(users)
        return res.status(200).json({})
    }
}
