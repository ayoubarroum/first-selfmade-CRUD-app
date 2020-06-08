import React from "react";

function Input(props) {

  return <div className="form-group  ">
   <label htmlFor={props.label}>{props.label+" :"}</label> 
  <input className="form-control" type="text" name={props.name} id={props.label} value={props.value} onChange={props.onChange} placeholder={"Enter your "+ props.label}/>
  </div>;
}

export default Input;
