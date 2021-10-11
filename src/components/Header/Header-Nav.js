import React from "react";
import { Link } from "react-router-dom";
import {RouterMap} from '../../router'
function HeaderNav(){
    return(
        <div className="col-lg-6">
        <div className="main-navigation flex-lg-right">
          <ul className="main-menu menu-right li-last-0">
            <li className="menu-item has-children">
              <Link to={RouterMap.Main}>На главную</Link>
            </li>
            <li className="menu-item has-children mega-menu">
            <Link to={RouterMap.Books}>Книги</Link>
            </li>
            <li className="menu-item has-children">
              <Link to={RouterMap.Cart}>
                Корзина <i className="fas"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    )
}

export default HeaderNav