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

export const getData = async function (url: string) {
    const res = await fetch(url)
    return await res.json()
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

export const loginUser = async (email: string, password: string) => {
    const res = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers,
    })

    return await res.json()
}
