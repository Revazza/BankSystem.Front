import styles from "./ProfitFromTransactions.module.scss";
import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { reportsUrl } from "../../../../../../url";

function ProfitFromTransactions(props) {
  const [timeFrame, setTimeFrame] = useState("");
  const [profits, setProfits] = useState([]);

  useEffect(() => {
    const token = Cookies.get("token");
    axios
      .get(
        `${reportsUrl}/api/Transactions/calculate-profit-from-transactions?months=${props.months}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        const profitPerCurrency = response.data.payload.profitPerCurrency;
        setTimeFrame(profitPerCurrency.timeframe);
        setProfits(profitPerCurrency.profits);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.timeframe}>
        <p>{timeFrame}</p>
      </div>
      <div className={styles.profit_container}>
        {profits.length !== 0 &&
          profits.map((profit) => {
            return (
              <div className={styles.profit} key={profit.currency}>
                <p>
                  {profit.profit} {profit.currency}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ProfitFromTransactions;
