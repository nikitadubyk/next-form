import { findUserByEmail } from './data/users'
import { setLoginSession } from '../../lib/auth'
const bcrypt = require('bcryptjs')

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { password, email } = req.body
        const user = findUserByEmail(email)

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
