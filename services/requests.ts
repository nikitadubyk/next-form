const headers = {
    'Content-type': 'application/json; charset=utf-8',
}

export const postData = async function (url: string, data: object) {
    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers,
    })

    return await res
}

export const getUserByEmail = async function (url: string, userEmail: string) {
    const res = await fetch(url + '/' + userEmail)
    return await res.json()
}

export const patchData = async function (
    url: string,
    userId: string,
    data: object
) {
    const res = await fetch(url + '/' + userId, {
        method: 'PATCH',
        body: JSON.stringify(data),
        headers,
    })

    return await res.json()
}
