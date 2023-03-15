import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Atm from "../components/home/atm/Atm";

import jwt_decode from "jwt-decode";

function Home() {
  const [module, setModule] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      navigate("/select");
    }
    const decodedToken = jwt_decode(token);
    console.log(decodedToken);
    if (decodedToken.cardNumber) {
      setModule("atm");
    } else {
      setModule("internet-bank");
    }
  }, []);

  return (
    <React.Fragment>
      <Routes>
        {module == "atm" && <Route path="/" element={<Atm />} />}
        {module == "internet-bank" && ""}
        </Routes>
    </React.Fragment>
  );
}

export default Home;
