import { users } from './data/users'
import { getLoginSession } from '../../lib/auth'

export default async function userInfo(req, res) {
    try {
        const session = await getLoginSession(req)

        const user = users.find(user => user.id === session.id)
        res.status(200).json({ email: user.email, userName: user.userName })
    } catch {
        res.status(401).end('Authentication token is invalid, please log in')
    }
}
