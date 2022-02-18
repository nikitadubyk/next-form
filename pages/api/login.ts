import type { NextApiRequest, NextApiResponse } from 'next'
// import { users } from './data/users'
import { findUser } from './data/users'
import { setLoginSession } from '../../lib/auth'
const bcrypt = require('bcryptjs')

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        const { password, email } = req.body
        console.log(password, email)
        // const user = users.find(user => user.email === email)
        const user = findUser(email)

        console.log(`USER IN LOGIN: ${user}`)

        let result
        if (user) result = bcrypt.compareSync(password, user.password)

        if (user === undefined) {
            res.status(401).json({ errorMessage: 'Wrong email' })
        } else if (user.email === email && !result) {
            res.status(401).json({ errorMessage: 'Wrong password' })
        } else if (user.email === email && result) {
            const userData = {
                email: user.email,
                userName: user.userName,
            }
            await setLoginSession(res, userData)
            res.status(200).json({})
        }
    }
}
