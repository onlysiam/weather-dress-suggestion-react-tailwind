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

function App() {
  const location = useLocation();

  const [login, setLogin] = useState(false);

  return (
    <div className="App">
      <Navbar login={login} setLogin={setLogin} />

      <AnimatePresence>{login ? <Authentication /> : ""}</AnimatePresence>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Startpage />} />
          <Route
            path={"home"}
            element={<HomeSection login={login} setLogin={setLogin} />}
          ></Route>
          <Route path={"dashboard"} element={<Dashboard />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
