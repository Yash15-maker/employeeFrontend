import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TextField, Button } from "@mui/material";
// import { Link } from "react-router-dom"
import axios from "axios";
export default function EditEmployee() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [fullName, setfullName] = useState("");
  const [position, setposition] = useState("");
  const [location, setlocation] = useState("");
  const [salary, setsalary] = useState("");

  function handleEdit(event) {
    event.preventDefault();
    const data = { fullName, position, location, salary };
    console.log(data);
    console.log(id);
    axios
      .put(`http://localhost:8080/api/employees/${id}`, { data })
      .then((res) => {
        console.log(res);
        alert("Edited Succesfully");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div>
      <React.Fragment>
        <h2>Edit</h2>
        <form onSubmit={handleEdit}>
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
          <Button variant="outlined" color="secondary" type="submit">
            Submit
          </Button>
        </form>
      </React.Fragment>
    </div>
  );
}
