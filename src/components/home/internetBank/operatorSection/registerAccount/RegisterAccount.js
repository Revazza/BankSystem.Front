import React from "react";
import RegisterAccountForm from "./RegisterAccountForm";
import styles from "./RegisterAccount.module.scss";

export default function RegisterAccount() {
  return (
    <div className={styles.container}>
      <RegisterAccountForm />
    </div>
  );
}
