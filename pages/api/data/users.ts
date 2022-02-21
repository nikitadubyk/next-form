const bcrypt = require('bcryptjs')

const users = Symbol.for('users')
global[users] = global[users] || []

export const createUser = async userData => {
    const user = userData
    const hash = bcrypt.hashSync(user.password, 5)

    user.password = hash
    global[users].push(user)

    return { user }
}

export const findUserByEmail = userEmail => {
    return global[users].find(user => user.email === userEmail)
}

export const filterUserById = userId => {
    return global[users].filter(user => user.id === userId)
}
