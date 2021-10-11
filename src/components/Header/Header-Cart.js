import React, { useContext } from "react";
import HeaderCartItem from "./Header-Cart-Item.js";
import context from "../../context";
import { observer } from "mobx-react-lite";
function HeaderCart() {
  const { Global,Cart } = useContext(context);

  const RenderCart = () =>
    Global.CartItems.map((el) => (
      <HeaderCartItem
      RemoveProduct={Cart.RemoveProduct}
      name={el.name} 
      id={el.bookid}
      img={el.img} 
      price={el.price}
      discount={el.discount}
      key={Math.random()} />
    ));

  return (
    <div className="cart-dropdown-block">
      <div className=" single-cart-block ">{RenderCart()}</div>
      <div className=" single-cart-block ">
        <div className="btn-block">
          <a href="#" className="btn">
            Корзина <i className="fas fa-chevron-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
export default observer(HeaderCart);
