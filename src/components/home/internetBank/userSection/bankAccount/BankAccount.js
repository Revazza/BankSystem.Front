import React from "react";
import styles from "./BankAccount.module.scss";

function BankAccount(props) {
  return (
    <div className={styles.container}>
      <span>{props.account?.iban}</span>
      <span>
        {props.account?.amount} {props.account?.currencyValue}
      </span>
    </div>
  );
}

export default BankAccount;
