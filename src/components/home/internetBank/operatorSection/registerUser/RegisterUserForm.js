import React, { useState } from "react";
import CustomForm from "../../../../../UI/form/CustomForm";
import { registerUserInputs as inputs } from "../../InputPlaceholder";

function RegisterUserForm(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [personalNumber, setPersonalNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const inputStateSetter = {
      firstName: setFirstName,
      lastName: setLastName,
      birthDate: setBirthDate,
      personalNumber: setPersonalNumber,
      email: setEmail,
      password: setPassword,
    };
    inputStateSetter[name](value);
  };

  const handleSubmission = () => {
    const inputValues = {
      firstName,
      lastName,
      birthDate,
      personalNumber,
      email,
      password,
    };
    props.onSubmit(inputValues);
  };

  return (
    <CustomForm
      onInputChange={handleInputChange}
      onSubmit={handleSubmission}
      formName="Register User"
      errorMsg={props.errorMsg}
      inputs={inputs}
      successMsg={props.successMsg}
    />
  );
}

export default RegisterUserForm;
