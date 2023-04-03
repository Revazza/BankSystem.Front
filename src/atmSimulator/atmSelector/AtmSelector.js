import React from "react";
import styles from "./AtmSelector.module.scss";

function AtmSelector(props) {
  const handleButtonClick = (e) => {
    props.onSectionChange(e.target.id);
  };
  return (
    <React.Fragment>
      <div className={styles.selector_container}>
        <div className={styles.button_wrapper}>
          <button onClick={handleButtonClick} id="change-pin">
            Change PIN
          </button>
        </div>
        <div className={styles.button_wrapper}>
          <button onClick={handleButtonClick} id="see-balance">
            See Balance
          </button>
        </div>
        <div className={styles.button_wrapper}>
          <button onClick={handleButtonClick} id="cash-out">
            Cash Out
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}
export default AtmSelector;
