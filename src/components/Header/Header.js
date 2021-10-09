import React from "react";
import Categories from "./Header-Categories";
import Nav from "./Header-Nav";
import { Link } from "react-router-dom";
import Menu from "./Header-Menu";
function Header() {
  return (
    <div className="site-header header-3  d-none d-lg-block">
      <div className="header-middle pt--10 pb--10">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3">
              <Link className="site-brand" to="/"><img src="./image/logo.png" alt="Картинка" /></Link>;
            </div>
            <div className="col-lg-5">
              <div className="header-search-block">
                <input type="text" placeholder="Введите название книги" />
                <button>Поиск</button>
              </div>
            </div>
            <Menu />
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <Categories />
            <Nav />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
