import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/auth/login/Login";
import RegisterOperator from "../components/auth/registerOperator/RegisterOperator";
import RegisterUser from "../components/auth/registerUser/RegisterUser";

const Auth = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/register-user" element={<RegisterUser />} />
        <Route path="/register-operator" element={<RegisterOperator />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </React.Fragment>
  );
};

export default Auth;
