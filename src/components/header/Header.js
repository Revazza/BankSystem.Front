import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  const location = useLocation();
  const [currentLoc, setCurrentLoc] = useState();

  useEffect(() => {
    setCurrentLoc(location.pathname);
  }, [location]);

  const headerId = currentLoc == "/" ? styles.accessSelector : "";

  return (
    <div className={styles.container} id={headerId}>
      <div className={styles.logo_wrapper}>
        <img src="./images/credo-logo.png" />
        <label>credo bank</label>
      </div>
    </div>
  );
};

export default Header;
