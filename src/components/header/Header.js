import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo_wrapper}>
        <img src="./images/credo-logo.png" />
        <label>credo bank</label>
      </div>
    </div>
  );
};

export default Header;
