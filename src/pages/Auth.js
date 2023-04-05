import React from "react";
import { Route, Routes } from "react-router-dom";
import AccessSelector from "../components/auth/accessSelector/AccessSelector";
import AtmLogin from "../components/auth/atm-login/AtmLogin";
import Login from "../components/auth/login/Login";
import RegisterOperator from "../components/auth/registerOperator/RegisterOperator";

const Auth = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/select" element={<AccessSelector />} />
        <Route path="/atm-login" element={<AtmLogin />} />
        <Route path="/register-operator" element={<RegisterOperator />} />
        <Route path="/internet-bank-login" element={<Login />} />
      </Routes>
    </React.Fragment>
  );
};

export default Auth;
