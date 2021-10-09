import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./styles/plugins.css";
import "./styles/main.css";
import { BrowserRouter } from "react-router-dom";
import Context from "./context";
import GlobalStore from "./store/GlobalStore";
import CartStore from "./store/CartStore";
import ProductsStore from "./store/ProductsStore";
import UserStore from "./store/UserStore";

const main_stor_object = {
  Global: GlobalStore,
  Cart: CartStore,
  Products: ProductsStore,
  User: UserStore,
};

ReactDOM.render(
  <Context.Provider value={main_stor_object}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Context.Provider>,
  document.getElementById("root")
);
