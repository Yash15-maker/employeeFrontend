import React from "react";
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";
export default function Delete({ id }) {
  const handleDelete = async () => {
    console.log(id);
    axios
      .delete(`http://localhost:8080/api/employees/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Button size="small" onClick={handleDelete} className="w-70">
        Delete
      </Button>
    </div>
  );
}
