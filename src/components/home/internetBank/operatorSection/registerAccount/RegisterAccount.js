import React from "react";
import RegisterAccountForm from "./RegisterAccountForm";
import styles from "./RegisterAccount.module.scss";

export default function RegisterAccount(props) {
  return (
    <div className={styles.container}>
      <RegisterAccountForm setInitialSection={props.setInitialSection}/>
    </div>
  );
}
