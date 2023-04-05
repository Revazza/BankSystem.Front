import React, { useState } from "react";
import { registerAccountInput as inputs } from "../../InputPlaceholder";
import CustomForm from "../../../../../UI/form/CustomForm";
import styles from "./RegisterAccountForm.module.scss";

export default function RegisterAccountForm(props) {
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState(0);
  const [personalNumber, setPersonalNumber] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const inputStateSetter = {
      amount: setAmount,
      currency: setCurrency,
      personalNumber: setPersonalNumber,
    };
    inputStateSetter[name](value);
  };

  const handleSubmission = () => {
    const inputValues = {
      personalNumber,
      amount,
      currency,
    };
    props.onSubmit(inputValues);
  };

  return (
    <div className={styles.container}>
      <CustomForm
        onInputChange={handleInputChange}
        onSubmit={handleSubmission}
        formName="Register Account"
        errorMsg={props.errorMsg}
        inputs={inputs}
        successMsg={props.successMsg}
      />
    </div>
  );
}
