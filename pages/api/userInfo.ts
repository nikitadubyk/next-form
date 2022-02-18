import type { NextApiRequest, NextApiResponse } from 'next'
import { users } from './data/users'
import { getLoginSession } from '../../lib/auth'

export default async function userInfo(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const session = await getLoginSession(req)

        // const user = users.find(user => user.id === session.id)
        // res.status(200).json({ email: user.email, userName: user.userName })
        console.log(session)
        res.status(200).json({
            email: session.userData.email,
            userName: session.userData.userName,
        })
    } catch {
        res.status(401).end('Authentication token is invalid, please log in')
    }
}
