import React, { useState } from "react";
import style from "./RegisterOperator.module.scss";
import { registerOperatorInputs as inputs } from "../InputsPlaceholder";
import CustomForm from "../../../UI/form/CustomForm";
import axios from "axios";
import { baseUrl } from "../../../url";

function RegisterOperator() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e;
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
      .post(`${baseUrl}/InternetBank/register-operator`, inpValues)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        setErrorMsg(error.response.data);
      });
  };

  return (
    <div className={style.wrapper}>
      <CustomForm
        formName="Register operator"
        onSubmit={handleSubmit}
        onInputChange={handleInputChange}
        inputs={inputs}
        errorMsg={errorMsg}
      />
    </div>
  );
}

export default RegisterOperator;
