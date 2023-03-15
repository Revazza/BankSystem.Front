import axios from "axios";
import React, { useState } from "react";
import CustomForm from "../../../UI/form/CustomForm";
import styles from "./AtmLogin.module.scss";
import { atmUrl } from "../../../url";
import { atmLoginInputs as inputs } from "../InputsPlaceholder";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function AtmLogin() {
  const [cardNumber, setCardNumber] = useState("");
  const [pin, setPin] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    const inputs = {
      cardNumber,
      pin,
    };
    axios
      .post(`${atmUrl}/api/ATM/login`, inputs)
      .then((response) => {
        const token = response.data;
        Cookies.set("token", token);
        navigate('/');
      })
      .catch((error) => {
        setErrorMsg(error.message);
        console.log("error: " + error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const inputStateSetter = {
      cardNumber: setCardNumber,
      pin: setPin,
    };
    inputStateSetter[name](value);
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

export default AtmLogin;
