import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { Link } from "react-router-dom";
import Delete from "./Delete";
export default function Home() {
  const [data, setdata] = React.useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/employees/")
      .then((res) => {
        setdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="row" style={{ padding: "3rem" }}>
      {data.map((d) => (
        <div className="col-md-5" key={d._id}>
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
