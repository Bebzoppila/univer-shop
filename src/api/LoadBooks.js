import { BASE_URL } from './configApi'
async function LoadBooks() {
    const response = await fetch(BASE_URL + 'api/v1/books')
    const data = await response.json()
    return data
}

export default LoadBooks