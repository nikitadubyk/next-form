import { users } from './data/users.js'
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
        users.push(req.body)
        changeUsersDatabase(users)
        return res.status(200).json()
    }
}
