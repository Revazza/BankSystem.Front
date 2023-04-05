import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState, useTransition } from "react";
import { reportsUrl } from "../../../../../../url";
import styles from "./AverageProfit.module.scss";

function AverageProfit(props) {
  const [currency, setCurrency] = useState();
  const [averageProfit, setAverageProfit] = useState();
  useEffect(() => {
    const token = Cookies.get("token");

    axios
      .get(
        `${reportsUrl}/api/Transactions/calculate-average-profit-per-transaction?currencyType=${props.currency}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        const averageProfitPerTransaction =
          response.data.payload.averageProfitPerTransaction;
        setCurrency(props.currencyType);
        setAverageProfit(averageProfitPerTransaction);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className={styles.wrapper}>
      <p>
        {averageProfit.toFixed(3)} {currency}
      </p>
    </div>
  );
}

export default AverageProfit;
