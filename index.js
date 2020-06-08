const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/employeeDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(console.log("DB Connected."));

var Schema = mongoose.Schema;

var employeeSchema = new Schema({
  fname: String,
  lname: String,
  job: String,
  salary: String,
});

const Employee = mongoose.model("Employee", employeeSchema);

app.get("/employee", function (req, res) {
  //console.log(Employees.find());
  Employee.find().then((employee) => res.json(employee));
});
//had post ah it'll be requested by the client
//and shall post to database
app.post("/employee", function (req, res) {
  const object = req.body.employeeObject; //la9aad karfasatna hatyh
  //console.log(object);

  const newEmployee = new Employee(
    {
      fname: object.fname,
      lname: object.lname,
      job: object.job,
      salary: object.salary,
    }
    //object
  );
  //res.json(newEmployee);
  //const empObj = newEmployee;
  //empObj.save().then((empObj) => res.json(empObj));
  newEmployee.save().then(
    (newEmployee) => res.json(newEmployee)
    //console.log(res.json(newEmployee))
    //res.json(newEmployee)
  );
  //   res.send({newEmployee})
  //newEmployee.save().then(console.log("Emp zahy"));
});

app.delete("/employee/:id", function (req, res) {
  const id = req.params.id;
  Employee.findByIdAndDelete(id)
    .then(() => res.json({ remove: true }))
    .catch((err) => console.log(err));
});

app.put("/employee/:id", function (req, res) {
  const object = req.body;

  Employee.findByIdAndUpdate(
    { _id: req.params.id }, //worked when added this
    {
      $set: {
        //worked when added this
        // <-- set stage
        fname: object.fname,
        lname: object.lname,
        job: object.job,
        salary: object.salary,
      },
    }
  )
    .then((result) => {
      res.status(200).json({ message: "Update successful!" });
    })
    .catch((err) => console.log(err));
});

app.listen("5000", () => {
  console.log("Server up on port 5000.");
});
