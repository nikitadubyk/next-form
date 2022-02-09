export const postData = async function (url, data) {
    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=utf-8',
        },
    })

    return await res
}

export const getData = async function (url) {
    const res = await fetch(url)
    return await res.json()
}

export const deleteData = async function (url, id) {
    const res = await fetch(url + '/' + id, {
        method: 'DELETE',
    })

    return await res.json()
}

export const patchData = async function (url, id, data) {
    const res = await fetch(url + '/' + id, {
        method: 'PATCH',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=utf-8',
        },
    })

    return await res
}
