import React, { useContext } from "react";
import Cart from "./Header-Cart";
import { Link } from "react-router-dom";
import context from "../../context";
import { observer } from "mobx-react-lite";
function HeaderMenu() {
  const { User, Global } = useContext(context);
  return (
    <div className="col-lg-4">
      <div className="main-navigation flex-lg-right">
        <div className="cart-widget">
          {User.isAuth ? (
            <>
              <p>{User.FullName} <button onClick={ () => Global.ExitProfile()} className="btn btn-danger">Выйти</button></p>
              
              <div className="cart-block">
                <div className="cart-total">
                  <span className="text-number">{Global.CartItems.length}</span>
                  <span className="text-item">Корзина</span>
                  <span className="price">
                    {Global.CartItemsPrice} ₽
                    <i className="fas fa-chevron-down"></i>
                  </span>
                </div>
                <Cart />
              </div>
            </>
          ) : (
            <div className="login-block">
              <Link className="font-weight-bold" to="/login-register">
                Зарегестрироваться
              </Link>
              <br />
              <span>или</span>
              <Link to="/login-register">Войти</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default observer(HeaderMenu);
