import { users } from '../../data/users'
import { setTokenCookie } from '../../../../lib/auth-cookies'
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { login } = req.query
        const { password, email } = req.body
        const user = users.find(user => user.email === login)

        const result = bcrypt.compareSync(password, user.password)

        if (user.email === email && result) {
            console.log('Правильный пароль')
            const token = jwt.sign(
                {id: user.id},
                'secret_key',
                { expiresIn: '1h' }
            )

            setTokenCookie(res, token)
                
            res.status(200).json(JSON.stringify(token))
        } else {
            console.log('Неправильный пароль')
            res.status(500)
        }
    }
}