const jwt = require('jsonwebtoken')
import Router from 'next/router'

export const authUser = token => {
    jwt.verify(token, 'secret', function(err, decoded) {
        if (decoded) {
            localStorage.setItem('userId', JSON.stringify(decoded))
            Router.push('/dashboard')
        }
    })
}