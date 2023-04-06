import React, { useEffect, useState } from "react";
import styles from "./UserSection.module.scss";
import Cookies from "js-cookie";
import axios from "axios";
import { baseUrl } from "../../../../url";
import UserAccountSection from "./userAccountSection/UserAccountSection";

function UserSection(props) {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const token = Cookies.get("token");
    axios
      .get(`${baseUrl}/User/get-accounts`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const userAccounts = response.data.payload.accounts;
        setAccounts(userAccounts);
      })
      .catch((error) => {
        console.log(error.response.data.Message);
      });
  }, []);

  return (
    <div className={styles.container}>
      <h1>account details</h1>
      {accounts.length !== 0 &&
        accounts?.map((acc) => {
          return <UserAccountSection key={acc.iban} account={acc} />;
        })}
    </div>
  );
}

export default UserSection;
