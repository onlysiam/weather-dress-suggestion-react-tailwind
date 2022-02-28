import { React, useEffect, useState } from "react";
//router
import { Routes, Route, useLocation } from "react-router-dom";

//animation
import { AnimatePresence } from "framer-motion";
//components
import Startpage from "./components/Startpage";
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import Dashboard from "./components/Dashboard";
import Authentication from "./components/Authentication";
import Alerts from "./components/alerts/Alerts";
//redux
import { useSelector, useDispatch } from "react-redux";
function App() {
  const location = useLocation();

  const authenticationWindowState = useSelector(
    (state) => state.loader.authWindow.state
  );

  return (
    <div className="App">
      <Navbar />
      <Alerts />
      <AnimatePresence>
        {authenticationWindowState ? <Authentication /> : ""}
      </AnimatePresence>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Startpage />} />
          <Route path={"home"} element={<HomeSection />}></Route>
          <Route path={"dashboard"} element={<Dashboard />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
