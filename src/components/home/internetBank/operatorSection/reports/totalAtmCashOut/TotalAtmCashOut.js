import styles from "./TotalAtmCashOut.module.scss";
import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { reportsUrl } from "../../../../../../url";

function TotalAtmCashOut(props) {
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    const token = Cookies.get("token");

    axios
      .get(
        `${reportsUrl}/api/Transactions/calculate-total-cash-out?currencyType=${props.currency}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        const payload = response.data.payload;
        setAmount(payload.totalCashOut);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.profit_container}>
        <div className={styles.profit}>
          <p>
            {amount} {props.currencyType}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TotalAtmCashOut;
