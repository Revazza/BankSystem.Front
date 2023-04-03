import React from "react";
import styles from "./Atm.module.scss";
import AtmSimulator from "../../../atmSimulator/AtmSimulator";
function Atm() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.simulator_wrapper}>
        <AtmSimulator />
      </div>
    </div>
  );
}

export default Atm;
