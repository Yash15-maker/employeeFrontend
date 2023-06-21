import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log(email, password);
    if (!email) {
      alert("Please enter your email");
      navigate("/login");
    } else if (!password) {
      alert("Please enter your password");
      navigate("/login");
    } else {
      const data = { email: email, password: password };
      axios
        .post("http://localhost:8080/api/auth/login", data)
        .then((res) => {
          navigate("/");
        })
        .catch((err) => {
          console.log(err, 20);
        });
    }
  };

  return (
    <div
      style={{
        display: "flex",
        boxShadow: "1px 1px 1px 1px rgb(0 0 0 / 16%)",
        justifyContent: "center",
        margin: "50px 70px",
        padding: "30px",
      }}
    >
      <div>
        <h1> LOGIN PAGE</h1>
        <div>
          <Link to="/signup"> SIGNUP </Link>{" "}
        </div>
        EMAIL -
        <input
          required
          type="text"
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />{" "}
        <br /> <br />
        PASSWORD -
        <input
          required
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />{" "}
        <br /> <br />
        <button onClick={handleLogin}> SUBMIT </button>
      </div>
    </div>
  );
}

export default Login;
