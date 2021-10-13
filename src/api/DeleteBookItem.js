import { BASE_URL } from "./configApi"
async function DeleteBookItem(id) {
    const response = await fetch(BASE_URL + `api/v1/delete?book_id=${id}`)
    const data = await response.json()
    return data
}
export default DeleteBookItem