import React,{useContext} from "react";
import Cart from "./Header-Cart";
import { Link } from "react-router-dom";
import context from "../../context";
import { observer } from 'mobx-react-lite';
function HeaderMenu() {
  const {User} = useContext(context)
  console.log(User);
  return (
    <div className="col-lg-4">
      <div className="main-navigation flex-lg-right">
        <div className="cart-widget">
          <div className="login-block">
          {User.isAuth ? <p>{User.userData.full_name}</p> :
          <>
          <Link className="font-weight-bold" to="/login-register">Зарегестрироваться</Link>
          <br />
          <span>или</span>
          <Link to="/login-register">Войти</Link>
          </>
          }
          </div>
          <div className="cart-block">
            <div className="cart-total">
              <span className="text-number">1</span>
              <span className="text-item">Корзина</span>
              <span className="price">
                ₽0.00
                <i className="fas fa-chevron-down"></i>
              </span>
            </div>
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default observer(HeaderMenu);
