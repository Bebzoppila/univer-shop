import React from "react";

function Pagination({size,active,UpdateActive}){

    const UpdatePaginations = (value) => UpdateActive(Math.max(Math.min(value,size),1))

    const RenderPaginationsItems = () => new Array(size).fill().map((element,indx) => (<li 
        key={indx +1}
        onClick={() => UpdatePaginations(indx +1)}
        className={active-1 === indx  ? "active" : ''}>
    <p className="single-btn">
      {indx + 1 }
    </p>
  </li>))

    return(
        <div className="pagination-block">
        <ul className="pagination-btns flex-center">
          <li onClick={() => UpdatePaginations(active - 1)} >
            <p className="single-btn prev-btn ">
              <i className="zmdi zmdi-chevron-left"></i>{" "}
            </p>
          </li>
          {RenderPaginationsItems()}
          <li>
            <p onClick={() => UpdatePaginations(active +1)} className="single-btn next-btn">
              <i className="zmdi zmdi-chevron-right"></i>
            </p>
          </li>
        </ul>
      </div>
    )
}
export default Pagination