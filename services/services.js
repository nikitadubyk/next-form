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
