import React, { useState } from "react";
import styles from "./RegisterUser.module.scss";
import { baseUrl, websiteUrl } from "../../../url";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import RegisterUserForm from "./RegisterUserForm";

const RegisterUser = () => {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmission = (inputs) => {
    axios
      .post(`${baseUrl}/InternetBank/register-user`, inputs)
      .then((response) => {
        console.log(response);
        navigate(`/login`);
      })
      .catch((error) => {
        console.log(error);
        setErrorMsg(error.response.data);
      });
  };

  return (
    <div className={styles.container}>
      <RegisterUserForm onSubmit={handleSubmission} errorMsg={errorMsg} />
    </div>
  );
};

export default RegisterUser;
