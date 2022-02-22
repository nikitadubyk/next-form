import { filterUserById } from '../data/users'
const bcrypt = require('bcryptjs')

export default function handler(req, res) {
    if (req.method === 'PATCH') {
        const { userId } = req.query
        const data = req.body

        const hash = bcrypt.hashSync(data.password, 5)
        const patchUser = filterUserById(userId)

        patchUser[0].password = hash

        res.status(200).json(patchUser)
    }
}
