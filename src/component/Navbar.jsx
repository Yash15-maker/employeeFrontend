import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Navbar({ user }) {
  const navigate = useNavigate();
  const auth = localStorage.getItem("user");
  const googleAuth = localStorage.getItem("googleuser");
  // var name = user.name;
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
                {auth || googleAuth ? (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      width: "20rem",
                      justifyContent: "space-around",
                    }}
                  >
                    <div style={{ padding: "0.95rem" }}>
                      {auth || googleAuth.replace(/"([^"]+(?="))"/g, "$1")}
                      {/* {navigate("/home")} */}
                    </div>
                    <div style={{ padding: "0.7rem" }}>
                      <Button
                        onClick={() => {
                          {
                            auth
                              ? localStorage.removeItem("user")
                              : localStorage.removeItem("googleuser");
                          }
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
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
