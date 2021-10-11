import Main from "./pages/Main"
import LoginRegister from "./pages/RegisterLogin"
import Cart from "./pages/Сart"
import Books from "./pages/Books"

const Routers = [{
        path: '/',
        name: 'Main',
        component: Main
    },
    {
        path: '/login-register',
        name: 'LoginRegister',
        component: LoginRegister,
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart,
    },
    {
        path: '/books',
        name: 'Books',
        component: Books,
    },

]

const RouterMap = {}
Routers.forEach(element => {
    let name = element.name
    RouterMap[name] = element.path
})
export { RouterMap }

export default Routers