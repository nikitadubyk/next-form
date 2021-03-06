import { findUserByEmail } from '../../data/users'

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const { userEmail } = req.query
        const user = findUserByEmail(userEmail)
        res.status(200).json(user)
    }
}
