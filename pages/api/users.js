import { users } from './data/users.js'
const bcrypt = require('bcryptjs')
const fs = require('fs')

export function changeUsersDatabase(data) {
    fs.writeFileSync(
        './pages/api/data/users.js',
        'export const users = ' + JSON.stringify(data)
    )
}

export default async function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json(users)
    } else if (req.method === 'POST') {
        const user = req.body
        const hash = bcrypt.hashSync(user.password, 5)
        user.password = hash
        users.push(user)
        changeUsersDatabase(users)
        return res.status(200).json()
    }
}
