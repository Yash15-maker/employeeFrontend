import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { Link } from "react-router-dom";
import Delete from "./Delete";
import { useNavigate } from "react-router-dom";
import RefreshIcon from "@mui/icons-material/Refresh";

export default function Home() {
  const navigate = useNavigate();
  const [data, setdata] = React.useState([]);
  const [key, setkey] = useState("");

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = () => {
    axios
      .get("http://localhost:8080/api/employees/home")
      .then((res) => {
        setdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSearch = () => {
    console.log(key);
    axios
      .get(`http://localhost:8080/api/employees/search/${key}`)
      .then((res) => {
        setdata(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="row" style={{ padding: "3rem" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          padding: "2rem",
        }}
      >
        <input
          type="text"
          id="myInput"
          // onkeyup="myFunction()"
          onChange={(e) => {
            setkey(e.target.value);
          }}
          value={key}
          placeholder="Search for names.."
          title="Type in a name"
        />
        <button
          onClick={handleSearch}
          style={{
            width: "40%",
            color: "#1B83BA",
            border: "#1B83BA",
            height: "10vh",
            padding: "10px",
          }}
        >
          Search
        </button>
        <Button
          style={{
            marginTop: "-1px",
            color: "#1B83BA",
            borderColor: "#1B83BA",
            width: "20%",
            height: "10vh",
            padding: "10px",
          }}
          onClick={() => {
            fetchdata();
          }}
          variant="outlined"
        >
          <RefreshIcon style={{ color: "#1B83BA" }} />
        </Button>
      </div>
      {data.map((d) => (
        <div className="col-md-4" key={d._id}>
          <Card sx={{ minWidth: 275 }} style={{ backgroundColor: "Grey" }}>
            {/* {console.log(d._id)} */}
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {d.fullName}
              </Typography>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {d.location}
              </Typography>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {d.salary}
              </Typography>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {d.position}
              </Typography>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {d.phone}
              </Typography>
            </CardContent>
            <CardActions>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <Button size="small">
                  <Link to={`/update/${d._id}`} style={{ color: "blue" }}>
                    Edit
                  </Link>
                </Button>
                <Delete id={d._id} />
              </div>
            </CardActions>
          </Card>
          <br />
        </div>
      ))}
    </div>
  );
}
