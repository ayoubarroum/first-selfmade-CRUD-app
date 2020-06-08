import React, { useState, useEffect } from "react";
import Form from "./components/formComponent";
import EmployeeTable from "./components/employeeTableComponent";
import "./App.css";
import axios from "axios";

function App() {
  const [employeeObject, updateEmployeeObject] = useState({
    fname: "",
    lname: "",
    job: "",
    salary: "",
    _id: "",
  });

  // const [objToUp,updateObjToUp]= useState({
  //   fname: "",
  //   lname: "",
  //   job: "",
  //   salary: "",

  // });
  const [employees, updateEmployees] = useState([
    // { fname: "Mark", lname: "Otto", job: "@mdo", salary: "100$" },
    // { fname: "Ayb", lname: "Zahya", job: "@mcdo", salary: "100B$" },
  ]);
  const success = { color: "success", msg: "Successfully added employee." };
  const danger = { color: "danger", msg: "Unable to add employee." };

  const [alert, setAlert] = useState({ color: "", msg: "" });
  function addFct(e) {
    e.preventDefault();
    //console.log(employeeObject.hasOwnProperty("_id")); //resp true
    //console.log(objToUp);
    //employeeObject.hasOwnProperty("_id")  rah kolhom endhom daba
    if (
      employeeObject.lname.length > 0 &&
      employeeObject.fname.length > 0 &&
      employeeObject.job.length > 0 &&
      employeeObject.salary.length > 0 &&
      isNaN(employeeObject.salary) != true
    ) {
      if (employeeObject._id.length !== 0) {
        //hady then it's always false!! une fois you update
        //employee no longer holds id
        console.log(employeeObject);

        //console.log(employeeObject._id);
        axios
          .put(`/employee/${employeeObject._id}`, employeeObject)
          .then(() =>
            axios.get("/employee").then((res) => {
              const emp = res.data;
              updateEmployees(() => [...emp]);
              ///////////////////////TCHAAAAA RAAAAYAAAAAA7!!!!
              // updateEmployees((prevState) => [...prevState, employeeObject])
              //ps WAIIIT, elach add current state (employeeObject) l updateEmployees why not use db data??
              //rah employee object doesn't contain an id originally,
              // which means you'll have to wait till it renders with get again
              //or...?
            })
          )
          .catch((err) => {
            if (err) {
              console.log(err);
            }
          });
      } else {
        axios.post("/employee", { employeeObject }).then(() =>
          axios.get("/employee").then((res) => {
            const emp = res.data;
            updateEmployees(() => [...emp]);
            ///////////////////////TCHAAAAA RAAAAYAAAAAA7!!!!
            // updateEmployees((prevState) => [...prevState, employeeObject])
            //ps WAIIIT, elach add current state (employeeObject) l updateEmployees why not use db data??
            //rah employee object doesn't contain an id originally,
            // which means you'll have to wait till it renders with get again
            //or...?
          })
        );
      }

      //console.log(employeeObject);

      updateEmployeeObject({
        fname: "",
        lname: "",
        job: "",
        salary: "",
        _id: "",
      });
      setAlert(success);
    } else {
      setAlert(danger);
      console.log("zahya");
    }
  }

  // useEffect(()=>{
  //   axios.get("/employee").then((res) => {
  //     const empl = res.data;
  //     //console.log(employees);
  //     updateEmployees({empl} );
  //   })}
  //   ,[]
  // ); 
  // useEffect(() => {//🔥 
  //   //we won't need to get on effect
  //   //bl3ks it shall be controlled
  //   //b7al on submit or else
  //   axios.get("/employee").then((res) => {
  //     const emp = res.data;
  //     updateEmployees(emp);
  //   });
  // }, []);

  function deleteEmp(id) {
    //console.log(id);

    axios.delete(`/employee/${id}`).then(() => {
      const empAfterDelete = employees.filter((employee) => {
        if (id !== employee._id) {
          return employee;
        }
      });
      // employees.splice(id, 1);
      //  employees.filter((employee)=>{})
      // updateEmployees([...employees]);
      updateEmployees([...empAfterDelete]);
    });

    //blaty nrdo hadchy b same id dyal db

    //hady removat had l item with this specific id mn employees array but won't show until...
    //hady updatat l UI So that changes show up
  }

  function updateEmp(id) {
    // console.log(id);
    const empToUpdate = employees.filter((employee) => {
      if (id === employee._id) {
        return employee;
      }
    });
    // console.log(...empToUpdate); //spread operator to remove array tags
    updateEmployeeObject(...empToUpdate);
    //updateObjToUp(empToUpdate);

    // axios.put(`/employee/${id}`).then()
    //bghyt njbd l employee object dyal sahbna lichecked edit fih
    //employees.find((employee)=>((employees.indexOf(employee))===id) //achglt: atloopi ela employees dak li endo id dyal clicked hua li atconsol loggi
    // .then(console.log(employee));
    //indexOf is not working here!!!
    //  console.log(employee) //id is not a part of array until ndiro db - employee raha object
    //console.log(id);
    //daba either add it to state or just use index of
    //on edit search for item based on id
    //give inputs value based on that item (i3ni show employee object dak lidrna first)
    //then give that emp diff specs
    //)
  }
  function update(e) {
    const { name, value } = e.target;
    if (name === "fname") {
      updateEmployeeObject((prevState) => {
        return {
          fname: value,
          lname: prevState.lname,
          job: prevState.job,
          salary: prevState.salary,
          _id: prevState._id,
        };
      });

      console.log(employeeObject);
    } else if (name === "lname") {
      updateEmployeeObject((prevState) => {
        return {
          fname: prevState.fname,
          lname: value,
          job: prevState.job,
          salary: prevState.salary,
          _id: prevState._id,
        };
      });
      //
      console.log(employeeObject);
    } else if (name === "job") {
      updateEmployeeObject((prevState) => {
        return {
          fname: prevState.fname,
          lname: prevState.lname,
          job: value,
          salary: prevState.salary,
          _id: prevState._id,
        };
      });
      //
      console.log(employeeObject);
    } else if (name === "salary") {
      updateEmployeeObject((prevState) => {
        return {
          fname: prevState.fname,
          lname: prevState.lname,
          job: prevState.job,
          salary: value,
          _id: prevState._id,
        };
      });
      //
      console.log(employeeObject);
    }
  }
  //khs ncheckiw if all fields are full and if salary is a number !!!
  //khsha tchecka on add function !!!
  //easy anchecki l object sent over to add
  //if all fields are right, then compute what you had and return success alert
  //else function for alert danger and do nothing
  // console.log(data);

  return (
    <div className="justify-content-center center_div">
      {employees.length > 0 && (
        <EmployeeTable emp={employees} delete={deleteEmp} update={updateEmp} />
      )}
      <Form
        add={addFct}
        update={update}
        employeeObject={employeeObject}
        alert={alert}
      />

      {/* empObj={addEmp} */}
    </div>
  );
}

export default App;
