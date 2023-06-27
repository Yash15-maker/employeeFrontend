import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AddEmployee from "./component/AddEmployee";
import EditEmployee from "./component/EditEmployee";
import Home from "./component/Home";
import React, { useState } from "react";
// import Delete from "./component/Delete";
// import GetProduct from "./component/GetProduct";

import Navbar from "./component/Navbar";
import Login from "./component/login";
import Signup from "./component/Signup";

function App() {
  const [user, setuser] = useState(null);
  // const [profile, setProfile] = useState(null);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar user={user} />
        <Routes>
          <Route
            exact
            path="/home"
            element={
              <div className="row mt-5">
                <AddEmployee />
                <Home />
              </div>
            }
          />
          <Route path="/update/:id" element={<EditEmployee />} />
          {/* <Route path="/delete/:id" element={<Delete />} /> */}
          {/* The Particular Card i have to visit */}
          {/* <Route path="/card/:id" element={<GetProduct />} /> */}
          <Route path="/" element={<Login setuser={setuser} />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
