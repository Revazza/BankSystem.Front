import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import AccessSelector from "../components/home/accessSelector/AccessSelector";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      navigate("/login");
    }
  }, []);

  return (
    <React.Fragment>
      <Routes>
        <Route path="/access-selector" element={<AccessSelector />} />
        <Route path="/atm" />
      </Routes>
    </React.Fragment>
  );
}

export default Home;
