import React, { useState } from "react";
import styles from "./RegisterUser.module.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import RegisterUserForm from "./RegisterUserForm";
import { baseUrl } from "../../../../../url";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

const RegisterUser = () => {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmission = (inputs) => {
    const token = Cookies.get("token");
    if (!token) {
      navigate("/select");
      return;
    }
    
    axios
      .post(`${baseUrl}/Operator/register-user`, inputs, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        setMessage("User registered successfuly!");
        setErrorMsg("");
      })
      .catch((error) => {
        console.log(error.response.data.Message);
        setErrorMsg(error.response.data.Message);
        setMessage("");
      });
  };

  return (
    <div className={styles.container}>
      <RegisterUserForm
        onSubmit={handleSubmission}
        errorMsg={errorMsg}
        successMsg={message}
      />
    </div>
  );
};

export default RegisterUser;
