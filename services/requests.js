const headers = {
    'Content-type': 'application/json; charset=utf-8',
}

export const postData = async function (url, data) {
    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers,
    })

    return await res
}

export const getUserByEmail = async function (url, userEmail) {
    const res = await fetch(url + '/' + userEmail)
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
