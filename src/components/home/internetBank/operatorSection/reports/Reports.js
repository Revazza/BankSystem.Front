import React from "react";
import styles from "./Reports.module.scss";
import Card from "../../../../../UI/card/Card";
import MonthlyTransactions from "./monthlyTransactions/MonthlyTransactions";
import ProfitFromTransactions from "./profitFromTransactions/ProfitFromTransactions";
import AverageProfit from "./averageProfit/AverageProfit";
import { ResponsiveContainer } from "recharts";
import CustomChart from "./customChart/CustomChart";
import TotalAtmCashOut from "./totalAtmCashOut/TotalAtmCashOut";

function Reports(props) {
  return (
    <Card className={styles.container}>
      <div onClick={props.setInitialSection} className={styles.go_back}>
        <p>Go back</p>
      </div>
      <h1>Monthly Transactions</h1>
      <div className={styles.monthly_transactions_wrapper}>
        <MonthlyTransactions months="1" />
        <MonthlyTransactions months="6" />
        <MonthlyTransactions months="12" />
      </div>
      <h1>Profit Per Transaction</h1>
      <div className={styles.profit_wrapper}>
        <ProfitFromTransactions months="1" />
        <ProfitFromTransactions months="6" />
        <ProfitFromTransactions months="12" />
      </div>
      <h1>Average Profit Per Transaction</h1>
      <div className={styles.average_profit_wrapper}>
        <AverageProfit currency="0" currencyType="GEL" />
        <AverageProfit currency="1" currencyType="USD" />
        <AverageProfit currency="2" currencyType="EUR" />
      </div>
      <div className={styles.chart_wrapper}>
        <h1>transactions count per day (last month)</h1>
        <CustomChart />
      </div>
      <h1>Total ATM Cash Out</h1>
      <div className={styles.total_cashout_wrapper}>
        <TotalAtmCashOut currency="0" currencyType="GEL" />
        <TotalAtmCashOut currency="1" currencyType="USD" />
        <TotalAtmCashOut currency="2" currencyType="EUR" />
      </div>
    </Card>
  );
}

export default Reports;
