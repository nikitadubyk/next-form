import { users } from '../data/users'
import { changeUsersDatabase } from '../users'
const bcrypt = require('bcryptjs')

export default function handler(req, res) {
    if (req.method === 'GET') {
        const { userId } = req.query
        const user = users.find(user => user.id === userId)
        res.status(200).json(user)
    } else if (req.method === 'DELETE') {
        const { userId } = req.query

        const deleteUser = users.filter(user => user.id !== userId)
        changeUsersDatabase(deleteUser)

        res.status(200).json(deleteUser)
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
