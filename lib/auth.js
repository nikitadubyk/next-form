const jwt = require('jsonwebtoken')
import Router from 'next/router'

export const authUser = token => {
    jwt.verify(token, 'secret_key', function(err, decoded) {
        if (decoded) {
            localStorage.setItem('userId', JSON.stringify(decoded))
            Router.push('/dashboard')
        }
    })
}

export const logout = async () => {
    const res = await fetch('/api/users/logout')
    localStorage.removeItem('userId');
    if (res.status === 200) {
        Router.push('/')
    }
}