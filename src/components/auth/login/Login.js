import React, { useEffect, useState } from "react";
import CustomForm from "../../../UI/form/CustomForm";
import styles from "./Login.module.scss";
import { loginInputs as inputs } from "../InputsPlaceholder";
import axios from "axios";
import { baseUrl } from "../../../url";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() =>{
    const token = Cookies.get('token');
    if(token)
    {
      const decodedJwt = jwtDecode(token);
      if(decodedJwt.role)
      {
        navigate("/internet-bank")
      }
    }
  },[]);

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
      .post(`${baseUrl}/Operator/login`, inpValues)
      .then((response) => {
        const token = response.data.payload.token;
        Cookies.set("token", token);
        navigate("/internet-bank");
      })
      .catch((error) => {
        if(!error.response)
        {
          setErrorMsg(error.message);
          return;
        }
        console.log(error);
        setErrorMsg(error.response.data.Message);
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
