import { getLoginSession } from '../../lib/auth'

export default async function userInfo(req, res) {
    try {
        const session = await getLoginSession(req)
        res.status(200).json({
            email: session.userData.email,
            userName: session.userData.userName,
        })
    } catch {
        res.status(401).end('Authentication token is invalid, please log in')
    }
}
