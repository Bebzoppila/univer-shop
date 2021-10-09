import React from "react";

function HeaderCart() {
  return (
    <div className="cart-dropdown-block">
      <div className=" single-cart-block ">
        <div className="cart-product">
          <a href="#" className="image">
            <img src="../image/products/cart-product-1.jpg" alt="" />
          </a>
          <div className="content">
            <h3 className="title">
              <a href="#">Kodak PIXPRO Astro Zoom AZ421 16 MP</a>
            </h3>
            <p className="price">
              <span className="qty">1 ×</span> £87.34
            </p>
            <button className="cross-btn">
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
      </div>
      <div className=" single-cart-block ">
        <div className="btn-block">
          <a href="#" className="btn">
            Корзина <i className="fas fa-chevron-right"></i>
          </a>
          <a href="#" className="btn btn--primary">
            Заказать <i className="fas fa-chevron-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
export default HeaderCart;
