import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AccessSelector.module.scss";

function AccessSelector() {
  const navigate = useNavigate();

  const handleUserChoice = (e) => {
    navigate(`/${e.target.id}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div
          className={styles.img_wrapper}
          id="internet-bank"
          onClick={handleUserChoice}
        ></div>
        <p>internet bank</p>
      </div>
      <div className={styles.wrapper}>
        <div
          className={styles.img_wrapper}
          id="atm"
          onClick={handleUserChoice}
        ></div>
        <p>atm</p>
      </div>
    </div>
  );
}

export default AccessSelector;
