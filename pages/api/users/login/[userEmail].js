import { users } from '../../data/users'

export default function handler(req, res) {
    if (req.method === 'GET') {
        const { userEmail } = req.query
        const user = users.find(user => user.email === userEmail)
        res.status(200).json(user)
    }
    // else if (req.method === 'POST') {
    //     const { userEmail } = req.query
    //     const { emailValue, passwordValue } = req.body

    //     const user = users.find(user => user.email === userEmail)

    //     if (user.email === emailValue && user.password === passwordValue) {
    //         res.status(200).json({ user, success: true })
    //     } else {
    //         res.status(500).json({ user, success: false })
    //     }
    // }
}
