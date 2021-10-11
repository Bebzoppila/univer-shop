import React from "react";
function HeaderCartItem({img,name,price,discount,RemoveProduct,id}) {
    return(
        <div className="cart-product">
        <a href="#" className="image">
          <img src={"http://127.0.0.1:5000/static/books/" + img} alt="" />
        </a>
        <div className="content">
          <h3 className="title">
            <a href="#">{name}</a>
          </h3>
          <p className="price">
          {price- (price * discount)/100 } ₽
          </p>
          <button onClick={() => RemoveProduct(id)} className="cross-btn">
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>
    )
}

export default HeaderCartItem