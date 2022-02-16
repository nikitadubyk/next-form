import { users } from './data/users.js'
import { changeUsersDatabase } from '../../lib/changeUsersDatabase.js'
const bcrypt = require('bcryptjs')

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const user = req.body
        const hash = bcrypt.hashSync(user.password, 5)
        user.password = hash
        users.push(user)
        changeUsersDatabase(users)
        return res.status(200).json()
    }
}
