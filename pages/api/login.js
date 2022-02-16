import { users } from './data/users'
import { setTokenCookie } from '../../lib/auth-cookies'
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

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
            const token = jwt.sign({ id: user.id }, 'secret_key', {
                expiresIn: '5h',
            })

            setTokenCookie(res, token)

            res.status(200).json({})
        }
    }
}
