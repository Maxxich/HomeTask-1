interface FetchOptions {
    method: 'POST' | 'GET' | 'PUT' | 'DELETE',
    body: string
}

interface FetchResponse {
    ok: boolean
}

export const mockedFetch = (url: string, options: FetchOptions) : Promise<FetchResponse> => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res({
                ok: false
            })
        }, 1500)
    })
}