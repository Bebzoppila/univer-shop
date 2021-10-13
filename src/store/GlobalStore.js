import { makeObservable, action, observable, computed } from 'mobx';
import SendAuthToken from '../api/AuthToken'
import UserStore from "./UserStore"
import CartStore from './CartStore';
import ProductsStore from './ProductsStore';
import LoadCartBooks from '../api/LoadCartBooks';
import SendAuthPassword from '../api/AuthPassword';
class GlobalStore {

    SetLocalStorage(date) {
        localStorage.setItem('TOKEN', date)
    }

    ExitProfile() {
        localStorage.removeItem('TOKEN')
        UserStore.exit()
        CartStore.Clear()
    }

    GetLocalStorage() {
        return localStorage.getItem('TOKEN')
    }

    AuthFromToken = async() => {
        const token = this.GetLocalStorage()
        if (token) {
            const result_auth = await SendAuthToken(token);
            if (result_auth) UserStore.setUserValues(result_auth.token, result_auth.full_name)
        }
    }

    AuthFromPassword = async(form_date) => {
        const result = await SendAuthPassword(form_date);
        if (result) {
            this.SetLocalStorage(result.token)
            this.AuthFromToken()
            this.LoatCart()
        }
    }

    async LoatCart() {
        const new_cart = await LoadCartBooks(this.GetLocalStorage())
        CartStore.SetProducts(new_cart)
    }

    get CartItems() {
        return ProductsStore.FullProducts.filter(element => CartStore.CartProducts.some(cart_item => Number(cart_item) === Number(element.bookid)))
    }

    get CartItemsPrice() {
        return this.CartItems.reduce((acc, { price, discount }) => acc + (price - (price * discount) / 100), 0)
    }


    constructor() {
        makeObservable(this, {
            CartItems: computed,
            LoatCart: action,
            CartItemsPrice: computed,
        })
    }
}
export default new GlobalStore()