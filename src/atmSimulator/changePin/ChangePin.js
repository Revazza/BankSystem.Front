import React from "react";
import styles from "./ChangePin.module.scss";
import Input from "../../UI/input/Input";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { atmUrl } from "../../url";

function ChangePin() {
  const [oldPin, setOldPin] = useState("");
  const [newPin, setNewPin] = useState("");
  const [message, setMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const inputStateSetter = {
      oldPin: setOldPin,
      newPin: setNewPin,
    };
    inputStateSetter[name](value);
  };

  const handleChangePin = (e) => {
    console.log(oldPin);
    console.log(newPin);
    const body = {
      oldPin,
      newPin,
    };
    console.log(body);
    var token = Cookies.get("token");
    axios
      .post(`${atmUrl}/api/Card/change-pin`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        setMessage("Pin changed successfuly");
        setErrorMsg("");
      })
      .catch((error) => {
        const payload = error.response.data;
        setErrorMsg(payload.Message);
        setMessage("");
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.input_container}>
        <div className={styles.input_wrapper}>
          <Input
            onChange={handleInputChange}
            placeholder="Old Pin"
            name="oldPin"
            type="number"
          />
        </div>
        <div className={styles.input_wrapper}>
          <Input
            onChange={handleInputChange}
            placeholder="New Pin"
            name="newPin"
            type="number"
          />
        </div>
      </div>
      {message.length != 0 && <p className={styles.message}>{message}</p>}
      {errorMsg.length != 0 && <p className={styles.error_msg}>{errorMsg}</p>}
      <div className={styles.btn_wrapper}>
        <button onClick={handleChangePin}>Change Pin</button>
      </div>
    </div>
  );
}

export default ChangePin;
