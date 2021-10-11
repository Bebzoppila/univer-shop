import React from "react";

function Asteriks({painted}) {
    const RenderPaint = () => new Array(5).fill().map((element,indx)=> (<span  
        key={indx + Math.random()}
        className={`fas fa-star ${painted > indx && 'star_on'}`}>
        </span>))
  return (
    <>
    {RenderPaint()}
    </>
  );
}

export default Asteriks;
