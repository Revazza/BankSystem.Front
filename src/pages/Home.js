import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Atm from "../components/home/atm/Atm";
import jwtDecode from "jwt-decode";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      navigate("/select");
      return;
    }
    const decodedToken = jwtDecode(token);
    if (decodedToken.exp < Date.now() / 1000) {
      navigate("/select");
      Cookies.remove("token");
    }
  }, []);

  return (
    <React.Fragment>
      <Routes>
        <Route path="/atm" element={<Atm />} />
      </Routes>
    </React.Fragment>
  );
}

export default Home;
