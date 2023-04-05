import React, { useEffect, useState } from "react";
import styles from "./UserSection.module.scss";
import Collapsible from "react-collapsible";
import BankAccount from "./bankAccount/BankAccount";
import Cookies from "js-cookie";
import axios from "axios";
import { baseUrl } from "../../../../url";

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
        console.log(response);
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
          return (
            <div className={styles.accounts_container} key={acc?.iban}>
              <Collapsible trigger={<BankAccount account={acc} />}>
                <p>Helllo</p>
              </Collapsible>
            </div>
          );
        })}
    </div>
  );
}

export default UserSection;
