
import React from "react";
import SignUp from "./Authentication/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeDashboard from "./component/HomeDashboard";
import Login from "./Authentication/Login";

const App = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<HomeDashboard/>}/>
          <Route path="/" element={<SignUp/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;