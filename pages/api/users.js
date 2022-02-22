import { createUser } from './data/users'

export default async function handler(req, res) {
    if (req.method === 'POST') {
        createUser(req.body)
        return res.status(200).json({})
    }
}
