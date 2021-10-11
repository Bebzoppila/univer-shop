import React, { useState, useContext, useEffect } from "react";
import CustomSelect from "../components/ui/CustomSelect";
import BookItem from "../components/Books/BookItem";
import context from "../context";
import { observer } from "mobx-react-lite";
import Pagination from "../components/Books/Pagination";

const select_quantity = [
  { text: "3", value: 3 },
  { text: "5", value: 5 },
  { text: "9", value: 9 },
  { text: "12", value: 12 },
];
const select_sort = [
  { text: "По умолчанию", value: "bookid" },
  { text: "По имени", value: "name" },
  { text: "По рейтингу", value: "estimation" },
  { text: "По цене", value: "price" },
];

function Books() {
  const { Products } = useContext(context);

  const [quantity_items, set_quantity_items] = useState(3);
  const UpdateQuatityItems = (value) => set_quantity_items(value);

  const [activ_sort, set_activ_sort] = useState("bookid");
  const UpdateActiveSort = (value) => set_activ_sort(value);

  const [active_paginations, set_active_paginations] = useState(1);
  const UpdateActivePaginations = (value) =>
    set_active_paginations(Number(value));

  useEffect(() => {
    Products.Sort(activ_sort);
  }, [activ_sort]);

  const RenderBookItems = () => {
    return Products.FullProducts.slice(
      (active_paginations - 1) * quantity_items,
      active_paginations * quantity_items
    ).map((product) => (
      <BookItem
        id={product.bookid}
        key={product.bookid}
        description={product.description}
        name={product.name}
        estimation={product.estimation}
        price={product.price}
        img={product.img}
        discount={product.discount}
      />
    ));
  };

  return (
    <main className="inner-page-sec-padding-bottom">
      <div className="container">
        <div className="shop-toolbar mb--30">
          <div className="row align-items-center">
            <div className="col-lg-2 col-md-2 col-sm-6  mt--10 mt-md--0">
              <CustomSelect
                select_arr={select_quantity}
                UpdateValue={UpdateQuatityItems}
                title={"К-во"}
              />
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 mt--10 mt-md--0 ">
              <CustomSelect
                select_arr={select_sort}
                UpdateValue={UpdateActiveSort}
                title={"Сортировка"}
              />
            </div>
          </div>
        </div>
        <div className="shop-product-wrap list with-pagination row space-db--30 shop-border">
          {RenderBookItems()}
        </div>
        <div className="row pt--30">
          <div className="col-md-12">
            <Pagination
              active={active_paginations}
              size={Math.ceil(Products.FullProducts.length / quantity_items)}
              UpdateActive={UpdateActivePaginations}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default observer(Books);
