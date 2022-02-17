const fs = require('fs')

export function changeUsersDatabase(data) {
    fs.writeFileSync(
        './pages/api/data/users.ts',
        'export const users = ' + JSON.stringify(data)
    )
}
