import { React, useEffect } from "react";
//router
import { Routes, Route, useLocation } from "react-router-dom";

//animation
import { AnimatePresence } from "framer-motion";
//components
import Startpage from "./components/Startpage";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import Dashboard from "./components/Dashboard";
import Authentication from "./components/Authentication";
import Alerts from "./components/alerts/Alerts";
//redux
import { useSelector, useDispatch } from "react-redux";
import { loadCountryCodes } from "./store/countrycodes";
import Profile from "./components/Profile";
function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const weatherDataLoading = useSelector(
    (state) => state.entities.weatherData.loading
  );
  const authentication = useSelector(
    (state) => state.entities.userAuthentication.loading
  );
  const authenticationWindowState = useSelector(
    (state) => state.loader.authWindow.state
  );

  //useEffect
  useEffect(() => {
    dispatch(loadCountryCodes());
  }, []);

  return (
    <div className="App">
      <Alerts />
      <AnimatePresence>
        {weatherDataLoading.state || authentication ? (
          <Preloader key={1} />
        ) : (
          ""
        )}
      </AnimatePresence>
      <Navbar />
      <AnimatePresence>
        {authenticationWindowState ? <Authentication /> : ""}
      </AnimatePresence>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Startpage />} />
          <Route path={"home"} element={<HomeSection />}></Route>
          <Route path={"dashboard"} element={<Dashboard />} />
          <Route path={"profile"} element={<Profile />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
