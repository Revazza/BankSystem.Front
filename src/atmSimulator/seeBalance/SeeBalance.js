import React, { useEffect } from "react";
import styles from "./SeeBalance.module.scss";
import { useState } from "react";
import axios from "axios";
import { atmUrl } from "../../url";
import Cookies from "js-cookie";

function SeeBalance() {
  const [balance, setBalance] = useState(0);
  const [currency, setCurrency] = useState("#");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    var token = Cookies.get("token");
    axios
      .get(`${atmUrl}/api/Card/see-balance`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        const payload = response.data.payload;
        setBalance(payload.balance);
        setCurrency(payload.currency);
      })
      .catch((error) => {
        setErrorMsg(error.message);
        console.log("error: " + error);
      });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <p>Balance: {balance} {currency}</p>
      </div>

    </div>
  );
}

export default SeeBalance;
