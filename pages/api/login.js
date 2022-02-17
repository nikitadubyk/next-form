import { users } from './data/users'
import { setLoginSession } from '../../lib/auth'
const bcrypt = require('bcryptjs')

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { password, email } = req.body
        const user = users.find(user => user.email === email)
        let result
        if (user) result = bcrypt.compareSync(password, user.password)

        if (user === undefined) {
            res.status(401).json({ errorMessage: 'Wrong email' })
        } else if (user.email === email && !result) {
            res.status(401).json({ errorMessage: 'Wrong password' })
        } else if (user.email === email && result) {
            await setLoginSession(res, user.id)
            res.status(200).json({})
        }
    }
}
