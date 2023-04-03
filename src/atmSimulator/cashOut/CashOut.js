import React, { useState } from "react";
import styles from "./CashOut.module.scss";
import { atmUrl } from "../../url";
import Cookies from "js-cookie";
import axios from "axios";
import Input from "../../UI/input/Input";

function CashOut() {
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState(0);
  const [message, setMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleInputChange = (e) => {
    setAmount(e.target.value);
  };

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  const handleCashOut = () => {
    
    const body = {
      amount: +amount,
      currency: +currency,
    };
    var token = Cookies.get("token");
    axios
      .post(`${atmUrl}/api/Transaction/cash-out`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const payload = response.data.payload;
        setMessage("Cash out completed, see details on email");
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
            placeholder="Amount"
            name="amount"
            type="number"
          />
        </div>
        <div className={styles.input_wrapper}>
          <select onChange={handleCurrencyChange} className={styles.selector}>
            <option id={0} value="0">
              GEL
            </option>
            <option id={1} value="1">
              USD
            </option>
            <option id={2} value="2">
              EUR
            </option>
          </select>
        </div>
      </div>
      {message.length != 0 && <p className={styles.message}>{message}</p>}
      {errorMsg.length != 0 && <p className={styles.error_msg}>{errorMsg}</p>}
      <div className={styles.btn_wrapper}>
        <button onClick={handleCashOut}>Cash Out</button>
      </div>
    </div>
  );
}

export default CashOut;
