import React, { useState } from "react";
import EmployeeTableRow from "./employeeTableRowComponent";

function EmployeeTable(props) {
  // const [employees,updateEmployees] = useState([{fname:"Mark",lname:"Otto",job:"@mdo",salary:"100$"},{fname:"Ayb",lname:"Zahya",job:"@mcdo",salary:"100B$"}]);

  //props.obj fiha l'object
  //hna lblan hua imta an updatyw??
  //updateEmployees(props.obj)
  const employees = props.emp;
  //  function deleteEmp(empId){
  // console.log(empId);
  // employees.splice(empId,1);
  //  }
  //id={index}
  const emps = employees.map((employee) => {
    return (
      <EmployeeTableRow
        key={employee._id}
        fname={employee.fname}
        id={employee._id}
        delete={props.delete}
        update={props.update}
        lname={employee.lname}
        job={employee.job}
        salary={employee.salary}
      />
    );
  });
  return (
    <div className="container-fluid ">
      <table className="col-7 table table-hover">
        <thead>
          <tr>
            <th scope="col">
              <b>#</b>
            </th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Job</th>
            <th scope="col">Salary</th>
          </tr>
        </thead>
        <tbody>{emps}</tbody>
      </table>

      {/* <EmployeeTableRow /> */}
    </div>
  );
}

export default EmployeeTable;
