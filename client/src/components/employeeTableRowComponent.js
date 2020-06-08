import React from "react";

function EmployeeTableRow(props) {
  function deleteId(e){
    const checkedEmpId=e.target.value;
   // console.log(checkedEmpId);

    {props.delete(checkedEmpId)}
  }
//for buttons we still have to add a prop to make it functionnal 
function updateId(e){
  const checkedEmpId=e.target.value;
  {props.update(checkedEmpId)};
}
  return <tr>
            <th scope="row">{props.id}</th>
            <td>{props.fname}</td>
            <td>{props.lname}</td>
            <td>{props.job}</td>
            <td>{props.salary}</td> 
            <td><div className="btn-group btn-group-toggle" data-toggle="buttons">
  <button type="button" className="btn btn-secondary" data-toggle="button" aria-pressed="false" autoComplete="off" onClick={updateId} value={props.id}>
  Edit
</button>
<button type="button" className="btn btn-danger" data-toggle="button" aria-pressed="false" autoComplete="off" onClick={deleteId} value={props.id}>
  Delete 
</button>
</div>
</td>
          </tr>;
}

export default EmployeeTableRow;