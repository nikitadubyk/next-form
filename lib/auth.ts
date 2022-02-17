import Router from 'next/router'
import { getTokenCookie, setTokenCookie, MAX_AGE } from './auth-cookies'
import Iron from '@hapi/iron'

const TOKEN_SECRET: string = process.env.TOKEN_SECRET

export const logout = async () => {
    const res = await fetch('/api/logout')
    if (res.status === 200) {
        Router.push('/')
    }
}

export async function setLoginSession(res, userId: string) {
    const createdAt = Date.now()
    const obj = { id: userId, createdAt, maxAge: MAX_AGE }

    const token = await Iron.seal(obj, TOKEN_SECRET, Iron.defaults)

    setTokenCookie(res, token)
}

export async function getLoginSession(req) {
    const token = getTokenCookie(req)

    if (!token) return

    const session = await Iron.unseal(token, TOKEN_SECRET, Iron.defaults)
    const expiresAt: number = session.createdAt + session.maxAge * 1000

    if (Date.now() > expiresAt) {
        throw new Error('Session expired')
    }

    return session
}
