import { BASE_URL } from "./configApi"
import UserStore from "../store/UserStore"
async function SendProduct(id) {
    const response = await fetch(BASE_URL + `api/v1/AddProduct?product_id=${id}`, {
        method: 'GET',
        headers: {
            'Authorization': UserStore.Token,
        }
    })
    const data = await response.json()
}
export default SendProduct