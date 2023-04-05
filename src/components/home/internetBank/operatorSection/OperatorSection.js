import React, { useState } from "react";
import styles from "./OperatorSection.module.scss";
import RegisterUser from "./registerUser/RegisterUser";
import RegisterAccount from "./registerAccount/RegisterAccount";
import RegisterCard from "./registerCard/RegisterCard";

function OperatorSection() {
  const [section, setSection] = useState("initial");

  const handleSectionChange = (e) => {
    setSection(e.target.id);
    console.log(e.target.id);
  };

  const setInitialSection = () => {
    setSection("initial");
  };

  return (
    <div className={styles.container}>
      {section === "initial" && (
        <div className={styles.btn_container}>
          <div className={styles.btn_wrapper}>
            <button onClick={handleSectionChange} id="add-user">
              Add User{" "}
            </button>
          </div>
          <div className={styles.btn_wrapper}>
            <button onClick={handleSectionChange} id="add-account">
              Add Account{" "}
            </button>
          </div>
          <div className={styles.btn_wrapper}>
            <button onClick={handleSectionChange} id="add-card">
              Add Card
            </button>
          </div>
          <div className={styles.btn_wrapper}>
            <button onClick={handleSectionChange} id="reports">
              Reports
            </button>
          </div>
        </div>
      )}
      {section !== "initial" && (
        <div onClick={setInitialSection} className={styles.go_back}>
          <p>Go back</p>
        </div>
      )}
      {section === "add-user" && <RegisterUser />}
      {section === "add-account" && <RegisterAccount />}
      {section === "add-card" && <RegisterCard />}
    </div>
  );
}

export default OperatorSection;
