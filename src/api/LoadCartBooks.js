import { BASE_URL } from "./configApi"

async function LoadCartBooks(token) {
    const response = await fetch(BASE_URL + 'api/v1/cartbooks', {
        method: 'GET',
        headers: {
            'Authorization': token
        }
    })
    const data = await response.json()
    console.log(data);
    return data
}
export default LoadCartBooks