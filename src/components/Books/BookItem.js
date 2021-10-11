import React,{useContext} from "react";
import Asteriks from "../ui/Asterisks";
import { observer } from 'mobx-react-lite';
import context from "../../context";
function BookItem({description,name,price,discount,estimation,img,id}){
  const {Cart} = useContext(context)
    return(
        <div className="col-lg-4 col-sm-6">
        <div className="product-card card-style-list">
          <div className="product-list-content">
            <div className="card-image">
              <img
                src={"http://127.0.0.1:5000/static/books/" + img}
                alt=""
              />
            </div>
            <div className="product-card--body">
              <div className="product-header">
                <h3>
                  <a href="product-details.html" tabIndex="0">
                   {name}
                  </a>
                </h3>
              </div>
              <article>
                <h2 className="sr-only">Card List Article</h2>
                <p>
                  {description}
                </p>
              </article>
              <div className="price-block">
                <span className="price">{price- (price * discount)/100 } ₽</span>
                <del className="price-old">{price} ₽</del>
                <span className="price-discount">{discount}%</span>
              </div>
              <div className="rating-block">
                <Asteriks painted={estimation} />
              </div>
              <div className="btn-block">
                <button onClick={event => Cart.AddProduct(id)}  className="btn btn-outlined">
                  Добавит в корзину
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default observer(BookItem)