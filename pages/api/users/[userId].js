import { users } from '../data/users'
import { changeUsersDatabase } from '../users'
const fs = require('fs')

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

        const patchUser = users.filter(user => user.id === userId)
        patchUser[0].password = data.password

        changeUsersDatabase(users)

        res.status(200).json(patchUser)
    }
}
