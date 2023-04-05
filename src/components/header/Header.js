import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
import Cookies from "js-cookie";

const Header = () => {
  const location = useLocation();
  const [currentLoc, setCurrentLoc] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentLoc(location.pathname);
  }, [location]);

  const handleLogOut = () => {
    Cookies.remove("token");
    navigate("/select");
  };

  const headerId = currentLoc === "/" ? styles.accessSelector : "";

  const showLogOut =
    location.pathname === "/atm" || location.pathname === "/internet-bank";
  console.log(location);
  return (
    <div className={styles.container} id={headerId}>
      <div className={styles.logo_wrapper}>
        <img src="./images/credo-logo.png" />
        <label>credo bank</label>
      </div>
      {showLogOut && (
        <div className={styles.log_out}>
          <button onClick={handleLogOut}>Log Out</button>
        </div>
      )}
    </div>
  );
};

export default Header;
