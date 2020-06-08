import React, { useState } from "react";
import Input from "./inputComponent";
import Message from "./messageComponent";
function Form(props) {
  // const [employeeObject, updateEmployeeObject] = useState({
  //   fname: "",
  //   lname: "",
  //   job: "",
  //   salary: ""
  // });
//add space recognition

  // function update(e) {
  //   const{name,value} = e.target;
  //   if (name === "fname") {
  //    updateEmployeeObject(prevState=>
  //     {return  {fname: value,
  //       lname: prevState.lname,
  //       job: prevState.job,
  //       salary: prevState.salary}
  //     });
  //     // console.log(employeeObject);
  //   } else if (name === "lname") {
  //     updateEmployeeObject(prevState=>
  //       {return  {fname: prevState.fname,
  //         lname: value,
  //         job: prevState.job,
  //         salary: prevState.salary}
  //       });
  //     // console.log(employeeObject);
  //   } else if (name === "job") {
  //     updateEmployeeObject(prevState=>
  //       {return  {fname: prevState.fname,
  //         lname: prevState.lname,
  //         job: value,
  //         salary: prevState.salary}
  //       });
  //     // console.log(employeeObject);
  //   } else if (name === "salary") {
  //     updateEmployeeObject(prevState=>
  //       {return  {fname: prevState.fname,
  //         lname: prevState.lname,
  //         job: prevState.job,
  //         salary: value}
  //       });
  //     // console.log(employeeObject);
  //   }
  // }
  function update(e){
    {props.update(e)}
  }
 
  function submit(e){
   
    {props.add(e)};


  }

  return (
    <div className="container-fluid ">
      <form className=" col-6 justify-content-center align-items-center" onSubmit={submit}>
        <h1 className="Jambotron">Add Employee:</h1>

        <Input
          name="fname"
          onChange={update}
          label="First Name"
          value={props.employeeObject.fname}
        />
        <Input
          name="lname"
          onChange={update}
          label="Last Name"
          value={props.employeeObject.lname}
        />
        <Input name="job" onChange={update} label="Job" value={props.employeeObject.job} />
        <Input
          name="salary"
          onChange={update}
          label="Salary"
          value={props.employeeObject.salary}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        
      </form>
      <Message alert={props.alert}/>
    </div>
  );
}

export default Form;
