import React, { useState } from "react";
import Input from "../../../UI/input/Input";
import styles from "./RegisterForm.module.scss";

function RegisterForm (props) {
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

  const handleSubmission = (e) => {
    e.preventDefault();
    const inputs = {
        firstName,
        lastName,
        birthDate,
        personalNumber,
        email,
        password
    }
    props.onSubmission(inputs);
  };

  return (
    <form className={styles.form_container} onSubmit={handleSubmission}>
      <p>Register</p>
      <div className={styles.input_wrapper} id={styles.firstInputWrapper}>
        <Input
          name="firstName"
          type="text"
          placeholder="First Name"
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.input_wrapper}>
        <Input
          name="lastName"
          type="text"
          placeholder="Last Name"
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.input_wrapper}>
        <Input
          name="personalNumber"
          type="text"
          placeholder="Personal Number"
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.input_wrapper}>
        <Input
          name="birthDate"
          type="date"
          placeholder="Birth Date"
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.input_wrapper}>
        <Input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.input_wrapper}>
        <Input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.errorMsg}>
        <p>Error message</p>
      </div>
      <div className={styles.button_wrapper}>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default RegisterForm;
