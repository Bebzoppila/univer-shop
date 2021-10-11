import React from "react";

function CustomSelect({title = 'Выберите опцию',select_arr,UpdateValue}) {

    const RenderOptions = () => select_arr.map(element => <option key={element.value} value={element.value}>{element.text}</option>)

  return (
    <div className="sorting-selection">
      <span>{title}</span>
      <select onInput={(event) => UpdateValue(event.target.value)} className="form-control nice-select sort-select">
          {RenderOptions()}
      </select>
    </div>
  );
}
export default CustomSelect