import React from "react";
import Card from "../../../UI/card/Card";
import styles from "./Register.module.scss";
import RegisterForm from "./RegisterForm";
import { baseUrl, websiteUrl } from "../../../url";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  var navigate = useNavigate();

  const handleSubmission = async (inputs) => {
    axios
      .post(`${baseUrl}/InternetBank/register-user`, inputs)
      .then((response) => {
        console.log(response);
        navigate(`/login`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.container}>
      <Card className={styles.input_container}>
        <RegisterForm onSubmission={handleSubmission} />
      </Card>
    </div>
  );
};

export default Register;
