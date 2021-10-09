import Main from "./pages/Main"
import LoginRegister from "./pages/RegisterLogin"
import Products from "./pages/Products"
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
        path: '/products',
        name: 'Products',
        component: Products,
    },

]

const RouterMap = {}
Routers.forEach(element => {
    let name = element.name
    RouterMap[name] = element.path
})
export { RouterMap }

export default Routers