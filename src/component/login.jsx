import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// // import jwt_decode from "jwt-decode";
// import { LoginSocialFacebook } from "reactjs-social-login";
// import { FacebookLoginButton } from "react-social-login-buttons";
import { GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";

function Login({ setuser }) {
  // const [provider, setProvider] = useState("");
  // const handleSigninGoogle = (response) => {
  //   var userObject = jwt_decode(response.credential);
  //   setuser(userObject);
  //   document.getElementById("signInbutton").hidden = true;
  // };
  // useEffect(() => {
  //   //global google connecting
  //   google.accounts.id.initialize({
  //     client_id:
  //       "1024464575987-teoh5pokqu84g5l9mre89med742tvj61.apps.googleusercontent.com",
  //     callback: handleSigninGoogle,
  //   });
  //   //for rendering
  //   google.accounts.id.renderButton(document.getElementById("signIndiv"), {
  //     theme: "outline",
  //     size: "large",
  //   });
  // }, []);
  // const name = (user) => {
  //   console.log({ user });
  // };

  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const auth = localStorage.getItem("user");
  if (auth) {
    navigate("/home");
  }
  const handleLogin = () => {
    console.log(email, password);
    if (!email) {
      alert("Please enter your email");
      navigate("/");
    } else if (!password) {
      alert("Please enter your password");
      navigate("/");
    } else {
      const data = { email: email, password: password };
      axios
        .post("http://localhost:8080/api/auth/", data)
        .then((res) => {
          localStorage.setItem("user", email);
          navigate("/home");
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
        justifyContent: "space-around",
        // margin: "50px 70px",
        padding: "30px",
      }}
    >
      <div>
        <h1> LOGIN PAGE</h1>
        <label>EMAIL -</label>
        <input
          required
          type="text"
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />{" "}
        <br /> <br />
        <label> PASSWORD -</label>
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
      <div
        style={{
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <LoginSocialGoogle
          client_id={
            "1024464575987-teoh5pokqu84g5l9mre89med742tvj61.apps.googleusercontent.com"
          }
          scope="openid profile email"
          discoveryDocs="claims_supported"
          access_type="offline"
          onResolve={(response) => {
            console.log(response);
            setuser(response.data);
            navigate("/home");
            localStorage.setItem(
              "googleuser",
              JSON.stringify(response.data.name)
            );
          }}
          onReject={(err) => {
            console.log(err);
          }}
        >
          <GoogleLoginButton />
        </LoginSocialGoogle>
        {/* <LoginSocialFacebook
          appId="656426656329362"
          onResolve={(response) => {
            console.log(response);
            setProfile(response.data);
          }}
          onReject={(error) => {
            console.log(error);
          }}
        >
          <FacebookLoginButton />
        </LoginSocialFacebook> */}
      </div>

      {/* {user ? (
        <div>
          {user.name}
         
        </div>
      ) : (
        <>{}</>
      )} */}
    </div>
  );
}

export default Login;
