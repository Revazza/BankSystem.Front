import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { reportsUrl } from "../../../../../../url";
import styles from "./MonthlyTransactions.module.scss";

function MonthlyTransactions(props) {
  const [transactionsCount, setTransactionsCount] = useState(0);
  const [timeFrame, setTimeFrame] = useState("");

  useEffect(() => {
    const token = Cookies.get("token");

    axios
      .get(
        `${reportsUrl}/api/Transactions/count-monthly-transactions?months=${props.months}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        const monthlyTransactions = response.data.payload.monthlyTransactions;
        setTransactionsCount(monthlyTransactions.count);
        setTimeFrame(monthlyTransactions.timeframe);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.timeFrame}>
        <p>
          {transactionsCount} <span>Transactions in </span> {timeFrame}
        </p>
      </div>
    </div>
  );
}

export default MonthlyTransactions;
