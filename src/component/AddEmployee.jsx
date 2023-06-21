import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
// import { Link } from "react-router-dom"
import axios from "axios";

const AddEmployee = () => {
  const [fullName, setfullName] = useState("");
  const [position, setposition] = useState("");
  const [location, setlocation] = useState("");
  const [salary, setsalary] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const data = { fullName, position, location, salary };
    console.log(data);
    axios
      .post("http://localhost:8080/api/employees/", data)
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
          label="location"
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
          label="position"
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
          label="salary"
          onChange={(e) => setsalary(e.target.value)}
          value={salary}
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
