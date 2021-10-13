import { BASE_URL } from './configApi'
async function SendAuthPassword(data) {
    const response = await fetch(BASE_URL + 'api/v1/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    if (response.status == 404) {
        return false
    }
    return await response.json()
}
export default SendAuthPassword