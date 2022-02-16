const jwt = require('jsonwebtoken')
import Router from 'next/router'
import { getTokenCookie } from './auth-cookies'

export const logout = async () => {
    const res = await fetch('/api/logout')
    if (res.status === 200) {
        Router.push('/')
    }
}

export async function getLoginSession(req) {
    const token = getTokenCookie(req)

    if (!token) return

    const session = jwt.decode(token)
    const expiresAt = session.exp * 1000

    if (Date.now() > expiresAt) {
        throw new Error('Session expired')
    }

    return session
}
