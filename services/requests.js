const headers = {
    'Content-type': 'application/json; charset=utf-8',
}

export const postData = async function (url, data) {
    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers
    })

    return await res
}

export const getData = async function (url) {
    const res = await fetch(url)
    return await res.json()
}

export const getUserByEmail = async function (url, userEmail) {
    const res = await fetch(url + '/' + userEmail)
    return await res.json()
}

export const deleteData = async function (url, userId) {
    const res = await fetch(url + '/' + userId, {
        method: 'DELETE',
    })

    return await res.json()
}

export const patchData = async function (url, userId, data) {
    const res = await fetch(url + '/' + userId, {
        method: 'PATCH',
        body: JSON.stringify(data),
        headers,
    })

    return await res.json()
}

export const loginUser = async (email, password) => {
    const res = await fetch(`http://localhost:3000/api/users/login/${email}`, {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers,
    })

    return await res.json()
}