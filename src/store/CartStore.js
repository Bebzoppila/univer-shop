import { makeObservable, action, observable, computed, runInAction } from 'mobx';
import SendProduct from '../api/SendProduct';
import DeleteBookItem from "../api/DeleteBookItem"
class CartStore {
    prodicts = []

    AddProduct(id) {
        console.log(id);
        if (this.ChecdProducts(id)) return
        this.prodicts.push(id)
        SendProduct(id)
    }

    ChecdProducts(id) {
        return this.prodicts.find(el => el == id)
    }

    SetProducts(new_products) {
        this.prodicts = new_products
    }

    RemoveProduct = (id) => {
        this.prodicts = this.prodicts.filter(el => Number(el) !== Number(id))
        DeleteBookItem(id)
    }

    Clear() {
        this.prodicts = []
    }

    get CartProducts() {
        return this.prodicts
    }

    constructor() {
        makeObservable(this, {
            prodicts: observable,
            AddProduct: action,
            RemoveProduct: action,
            SetProducts: action,
            CartProducts: computed,
            Clear: action,
        })
    }

}

export default new CartStore()