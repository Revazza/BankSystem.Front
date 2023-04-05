import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Atm from "../components/home/atm/Atm";
import InternetBank from "../components/home/internetBank/InternetBank";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/select')
    
  }, []);

  return (
    <React.Fragment>
      <Routes>
        <Route path="/atm" element={<Atm />} />
        <Route path="/internet-bank" element={<InternetBank />} />
      </Routes>
    </React.Fragment>
  );
}

export default Home;
