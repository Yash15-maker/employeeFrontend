import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const auth = localStorage.getItem("user");

  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Aomato
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                {auth ? (
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div>
                      {auth}
                      {/* {navigate("/home")} */}
                    </div>
                    <div>
                      <Button
                        onClick={() => {
                          localStorage.removeItem("user");
                          navigate("/");
                        }}
                      >
                        Log Out
                      </Button>
                    </div>
                  </div>
                ) : (
                  <a className="nav-link active" aria-current="page" href="#">
                    <Link to="/signup">SignUp</Link>
                  </a>
                )}
              </li>

              {/* <li className="nav-item">{user.name}</li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
