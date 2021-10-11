import { makeObservable, action, observable, computed, runInAction } from "mobx";
import LoadBooks from "../api/LoadBooks";
const PRODUCTS_DEFAULT = [{
        bookid: 1,
        description: "Описание",
        name: "имя",
        estimation: 5,
        price: 500,
        img: "master_and_margarita.jpg",
        discount: 0,
    },
    {
        bookid: 2,
        description: "Описание2",
        name: "имя2",
        estimation: 3,
        price: 502,
        img: "master_and_margarita.jpg",
        discount: 0,
    },
    {
        bookid: 3,
        description: "Описание",
        name: "имя",
        estimation: 5,
        price: 503,
        img: "master_and_margarita.jpg",
        discount: 0,
    },
    {
        bookid: 4,
        description: "Описание2",
        name: "имя2",
        estimation: 3,
        price: 504,
        img: "master_and_margarita.jpg",
        discount: 0,
    },
    {
        bookid: 5,
        description: "Описание",
        name: "имя",
        estimation: 5,
        price: 505,
        img: "master_and_margarita.jpg",
        discount: 0,
    },
    {
        bookid: 6,
        description: "Описание2",
        name: "имя2",
        estimation: 3,
        price: 506,
        img: "master_and_margarita.jpg",
        discount: 0,
    },
    {
        bookid: 7,
        description: "Описание",
        name: "имя",
        estimation: 5,
        price: 507,
        img: "master_and_margarita.jpg",
        discount: 0,
    },
    {
        bookid: 8,
        description: "Описание2",
        name: "имя2",
        estimation: 3,
        price: 508,
        img: "master_and_margarita.jpg",
        discount: 0,
    },
];

class ProductsStore {
    products = []

    Sort = (key_name) => {
        this.products.sort((book1, book2) =>
            typeof book1[key_name] === "string" ?
            book1[key_name].localeCompare(book2[key_name]) :
            book1[key_name] - book2[key_name]
        );
    };

    async LoadBooks() {
        const book = await LoadBooks()
        runInAction(() => {
            this.products = book || PRODUCTS_DEFAULT
        })

    }

    get FullProducts() {
        return this.products;
    }

    constructor() {
        makeObservable(this, {
            products: observable,
            FullProducts: computed,
            Sort: action,
        });
    }
}
export default new ProductsStore();