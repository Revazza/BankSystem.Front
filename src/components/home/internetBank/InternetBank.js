import React, { useEffect, useState } from "react";
import styles from "./InternetBank.module.scss";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import OperatorSection from "./operatorSection/OperatorSection";


function InternetBank() {
    const [section, setSection] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
      const token = Cookies.get("token");
      if (!token) {
        navigate("/select");
        return;
      }
      const decodedJwt = jwtDecode(token);
      setSection(decodedJwt.role);
    }, []);
  
    return (
      <div className={styles.container}>
        {section == "api-operator" && <OperatorSection />}
      </div>
    );
}

export default InternetBank;
