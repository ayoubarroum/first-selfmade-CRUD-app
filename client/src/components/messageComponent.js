import React from "react";
//hna t9dr dir shy state fiha success or danger based on condition lidayr nta
//also text liendk ikhdm ela7sabha a l'aise
function Message(props) {
  const {color,msg} = props.alert;
  return (
    <div className="col-6 ">
      <div class={`alert alert-${color}`} role="alert"> 
        {msg}
      </div>
      {/* <div class="alert alert-danger" role="alert">
       Unable to add employee.
      </div> */}
    </div>
  );
}

export default Message;
//success
//Successfully added employee.
//danger
//Unable to add employee.