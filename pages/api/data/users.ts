const bcrypt = require('bcryptjs')

const users = []

export const createUser = async userData => {
    const user = userData
    const hash = bcrypt.hashSync(user.password, 5)

    user.password = hash
    users.push(user)

    console.log('Users.ts DATA', users)
    return { user }
}

export const findUser = userEmail => {
    const user = users.find(user => user.email === userEmail)
    console.log(`Users in findUser:${users}`, `User in findUser:${user}`)
    return user
}
