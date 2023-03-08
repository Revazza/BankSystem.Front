import React, { useState } from "react";
import CustomForm from "../../../UI/form/CustomForm";
import styles from "./Login.module.scss";
import { loginInputs as inputs } from "../InputsPlaceholder";
import axios from "axios";
import { baseUrl } from "../../../url";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const inputStateSetter = {
      email: setEmail,
      password: setPassword,
    };
    inputStateSetter[name](value);
  };

  const handleSubmit = () => {
    const inpValues = {
      email,
      password,
    };

    axios
      .post(`${baseUrl}/InternetBank/login`, inpValues)
      .then((response) => {
        Cookies.set("token", response.data);
        navigate("/access-selector");
      })
      .catch((error) => {
        setErrorMsg(error.response.data);
      });
  };

  return (
    <div className={styles.wrapper}>
      <CustomForm
        onSubmit={handleSubmit}
        onInputChange={handleInputChange}
        errorMsg={errorMsg}
        formName="Login"
        inputs={inputs}
      />
    </div>
  );
}

export default Login;
