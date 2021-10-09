import React, { useState, useRef } from "react";
import useBackClick from "../../hooks/useBackClick";

function HeaderCatigories() {
  let [is_open, set_is_open] = useState(false);
  const nav_ref = useRef();
  useBackClick(nav_ref, set_is_open);

  const RenderNavClases = () => ["category-nav ", is_open && "show"].join(" ");
  return (
    <div className="col-lg-3">
      <nav ref={nav_ref} className={RenderNavClases()}>
        <div>
          <a
            onClick={() => set_is_open(!is_open)}
            href="#"
            className="category-trigger"
          >
            <i className="fa fa-bars"></i>Категории
          </a>
          <ul className="category-menu ">
            <li className="cat-item ">
              <a href="#">Искусство и фотография</a>
            </li>
            <li className="cat-item">
              <a href="#">Биографии</a>
            </li>
            <li className="cat-item ">
              <a href="#">Бизнес и Деньги</a>
            </li>
            <li className="cat-item ">
              <a href="#">Детские книги</a>
            </li>
            <li className="cat-item">
              <a href="#">Лучшее</a>
            </li>
            <li className="cat-item ">
              <a href="#">Кулинарные книги</a>
            </li>
            <li className="cat-item ">
              <a href="#">Аксессуары</a>
            </li>
            <li className="cat-item ">
              <a href="#">Образование</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default HeaderCatigories;
