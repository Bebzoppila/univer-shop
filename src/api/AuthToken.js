import { BASE_URL } from './configApi'
async function SendAuthToken(token) {
    const response = await fetch(BASE_URL + 'api/v1/auth', {
        method: 'POST',
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        },
        body: ''
    });
    if (response.status == 404) {
        return false
    }
    return await response.json()
}
export default SendAuthToken