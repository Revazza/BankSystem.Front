import React, { useState } from "react";
import styles from "./UserAccountSection.module.scss";
import Collapsible from "react-collapsible";
import BankCard from "../bankCard/BankCard";
import BankAccount from "../bankAccount/BankAccount";

function UserAccountSection(props) {
  const [iban, setIban] = useState();

  console.log(props.account);
  const handleCollapsibleClick = () => {
    if (!iban) {
      setIban(props.account.iban);
    } else {
      setIban();
    }
  };

  return (
    <div className={styles.accounts_container} onClick={handleCollapsibleClick}>
      <Collapsible trigger={<BankAccount account={props?.account} />}>
        <BankCard iban={iban} />
      </Collapsible>
    </div>
  );
}

export default UserAccountSection;
