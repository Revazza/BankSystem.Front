import React, { useState } from "react";
import styles from "./AtmSimulator.module.scss";
import AtmSelector from "./atmSelector/AtmSelector";
import SeeBalance from "./seeBalance/SeeBalance";
import ChangePin from "./changePin/ChangePin";
import CashOut from "./cashOut/CashOut";

function AtmSimulator() {
  const [section, setSection] = useState("initial");
  const [sectionName, setSectionName] = useState("credo bank atm");

  const handleSectionChange = (id) => {
    setSection(id);
    const newSectionName = id.split("-").join(" ");
    setSectionName(newSectionName);
  };

  const setSectionToInitial = () => {
    setSection("initial");
    setSectionName("credo bank atm");
  };

  return (
    <React.Fragment>
      <div id={styles.atmmac}>
        <div id={styles.outer}>
          <div id={styles.camera}>
            <div id={styles.lens}></div>
            <div id={styles.light}></div>
          </div>
          <div id={styles.com}>
            <button id={styles.b1}></button>
            <button id={styles.b2}></button>
            <button id={styles.b3}></button>
            <button id={styles.b4}></button>
            <button id={styles.b5}></button>
            <button id={styles.b6}></button>
          </div>
          <div className={styles.screen}>
            {section != "initial" && (
              <p onClick={setSectionToInitial} className={styles.go_back}>
                Go Back
              </p>
            )}
            <p className={styles.welcome_text}>{sectionName}</p>
            {section == "initial" && (
              <AtmSelector onSectionChange={handleSectionChange} />
            )}
            {section == "see-balance" && <SeeBalance />}
            {section == "change-pin" && <ChangePin />}
            {section == "cash-out" && <CashOut />}
          </div>
        </div>
      </div>
      <div id={styles.botto}>
        <div id={styles.indicator2}> </div>
        <div id={styles.cash}>
          <div id={styles.cash1}></div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AtmSimulator;
