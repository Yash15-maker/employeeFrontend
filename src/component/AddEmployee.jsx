import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
// import { Link } from "react-router-dom"
import axios from "axios";

const AddEmployee = () => {
  const [fullName, setfullName] = useState("");
  const [position, setposition] = useState("");
  const [location, setlocation] = useState("");
  const [salary, setsalary] = useState("");
  const [phone, setphone] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    const data = { fullName, position, location, salary, phone };
    console.log(data);
    axios
      .post("http://localhost:8080/api/employees/home", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <React.Fragment>
      <h2>Register Form for Employee</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          variant="outlined"
          color="secondary"
          label="Full Name"
          onChange={(e) => setfullName(e.target.value)}
          value={fullName}
          fullWidth
          required
          sx={{ mb: 4 }}
        />
        <TextField
          type="text"
          variant="outlined"
          color="secondary"
          label="Location"
          onChange={(e) => setlocation(e.target.value)}
          value={location}
          fullWidth
          required
          sx={{ mb: 4 }}
        />
        <TextField
          type="text"
          variant="outlined"
          color="secondary"
          label="Position"
          onChange={(e) => setposition(e.target.value)}
          value={position}
          required
          fullWidth
          sx={{ mb: 4 }}
        />
        <TextField
          type="text"
          variant="outlined"
          color="secondary"
          label="Salary"
          onChange={(e) => setsalary(e.target.value)}
          value={salary}
          fullWidth
          required
          sx={{ mb: 4 }}
        />
        <TextField
          type="text"
          variant="outlined"
          color="secondary"
          label="Phone"
          onChange={(e) => setphone(e.target.value)}
          value={phone}
          fullWidth
          required
          sx={{ mb: 4 }}
        />
        <Button variant="outlined" color="secondary" type="submit">
          Submit
        </Button>
      </form>
      {/* <small>Already have an account? <Link to="/login">Login Here</Link></small> */}
    </React.Fragment>
  );
};

export default AddEmployee;
