import React from "react";

function CustomInput({inner_class,lable_text,type,UpdateValues}){
    const Id_input = Math.random() + Math.random() * Math.random()

    const UpdateInputValues = (event) =>  UpdateValues(event.target.value.trim());

    return(
        <div className={inner_class ?? "col-md-12 col-12 mb--15"}>
        <label htmlFor={Id_input}>{lable_text}</label>
        <input onChange={UpdateInputValues} className="mb-0 form-control" type={type} id={Id_input}/>
    </div>
    )
}
export default CustomInput