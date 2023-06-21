import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();

  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setType] = useState("");

  const handleSignup = () => {
    console.log(email, password, userType);

    if (!email) {
      alert("Please enter your email");
      navigate("/signup");
    } else if (!password) {
      alert("Please enter your password");
      navigate("/signup");
    } else if (!userType) {
      alert("Please enter your type");
      navigate("/signup");
    } else {
      const data = { email: email, password: password, userType };
      axios
        .post("http://localhost:8080/api/auth/signup", data)
        .then((res) => {
          navigate("/login");
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
        <h1> Signup PAGE</h1>
        <div>
          {" "}
          <Link to="/login"> LOGIN </Link>{" "}
        </div>
        EMAIL -
        <input
          type="text"
          required
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />{" "}
        <br /> <br />
        PASSWORD -
        <input
          type="password"
          required
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />{" "}
        <br /> <br />
        USER TYPE -
        <input
          type="text"
          required
          value={userType}
          onChange={(e) => {
            setType(e.target.value);
          }}
        />{" "}
        <br /> <br />
        <button onClick={handleSignup}> SUBMIT </button>
      </div>
    </div>
  );
}

export default Signup;
