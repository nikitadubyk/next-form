const fs = require('fs')

export function changeUsersDatabase(data) {
    fs.writeFileSync(
        './pages/api/data/users.js',
        'export const users = ' + JSON.stringify(data)
    )
}
