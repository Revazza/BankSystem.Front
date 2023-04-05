import React, { useState } from "react";
import styles from "./RegisterCard.module.scss";
import { registerCardInput as inputs } from "../../InputPlaceholder";
import CustomForm from "../../../../../UI/form/CustomForm";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../../../../url";

function RegisterCard() {
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [iban, setIban] = useState("");

  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setIban(value);
  };

  const handleSubmission = () => {
    const inputValues = {
      iban,
    };
    const token = Cookies.get("token");
    if (!token) {
      navigate("/select");
      return;
    }

    axios
      .post(`${baseUrl}/Operator/register-card`, inputValues, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        setSuccessMsg("Card added successfuly");
        setErrorMsg("");
      })
      .catch((error) => {
        console.log(error.response.data.Message);
        setErrorMsg(error.response.data.Message);
        setSuccessMsg("");
      });
  };

  console.log(inputs);

  return (
    <div className={styles.container}>
      <CustomForm
        onInputChange={handleInputChange}
        onSubmit={handleSubmission}
        formName="Register Card"
        errorMsg={errorMsg}
        inputs={inputs}
        successMsg={successMsg}
      />
    </div>
  );
}

export default RegisterCard;
