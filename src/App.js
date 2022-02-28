import { React, useEffect, useState } from "react";
//router
import { Switch, Routes, Route, useLocation } from "react-router-dom";
//animation
// import { AnimatePresence } from "framer-motion";

//data
import {
  iconsData,
  timeofday,
  weekdaysname,
  dressesDataMale,
  dressesDataFemale,
  dressesDataFormalFemale,
  dressesDataFormalMale,
} from "./data";

//styled
//animation
import { AnimatePresence } from "framer-motion";
//components
import Startpage from "./components/Startpage";
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

function App() {
  useEffect(() => {
    console.log("mpountin");
  }, []);
  const location = useLocation();

  const [login, setLogin] = useState(false);

  const [windowheight, setWindowheght] = useState();
  const [windowwidth, setWindowwidth] = useState();

  const [navclrhome, setnavclrhome] = useState("white");
  const [navclrprofile, setnavclrprofile] = useState("white");
  const [navclrsettings, setnavclrsettings] = useState("white");

  const [startpage, setStartpage] = useState();
  const [authenticated, setAuthenticated] = useState(false);
  const [authenticationType, setAuthenticationType] = useState(true);
  const [incorrectUsername, setincorrectUsername] = useState(false);
  const [incorrectPassword, setincorrectPassword] = useState(false);
  const [validMail, setvalidMail] = useState(false);
  const [passMatched, setpassMatched] = useState(false);

  const [loginOP, setloginOP] = useState("1");
  const [signupOP, setsignupOP] = useState("0");
  const [resetPassword, setresetPassword] = useState(false);

  const [name, setName] = useState("");
  const [userName, setUserName] = useState("1610861042");
  const [password, setPassword] = useState("siam");
  const [email, setemail] = useState("");

  const [currentTime, setcurrentTime] = useState("");

  const [searchedCity, setsearchedCity] = useState("");
  const [searchedCountry, setsearchedCountry] = useState("");
  const [long, setLong] = useState("");
  const [lat, setLat] = useState("");

  const [isSearched, setisSearched] = useState(false);
  const [generateSuggestion, setgenerateSuggestion] = useState(false);

  const [apiData, setapiData] = useState([]);
  const [weekDays, setweekDays] = useState(weekdaysname());
  const [icons, setIcons] = useState(iconsData());
  const [greetings, setGreetings] = useState(timeofday());

  const [dressesMale, setDressesMale] = useState(dressesDataMale());
  const [dressesFemale, setDressesFemale] = useState(dressesDataFemale());
  const [dressesFormalMale, setDressesFormalMale] = useState(
    dressesDataFormalMale()
  );
  const [dressesFormalFemale, setDressesFormalFemale] = useState(
    dressesDataFormalFemale()
  );
  const [male, setMale] = useState(true);
  const [female, setFemale] = useState(false);
  const [formal, setFormal] = useState(false);

  const [savedOutfit, setSavedOutfit] = useState([]);
  const [fetchNow, setfetchNow] = useState("");

  const [preloader, setpreloader] = useState();

  useEffect(() => {
    setWindowheght(window.innerHeight);
    setWindowwidth(window.innerWidth);
    setStartpage(true);
    setTimeout(function () {
      setStartpage(false);
    }, 10000);

    if (localStorage.getItem("userID")) {
      setAuthenticated(true);
      setName(localStorage.getItem("name"));
    } else {
      setAuthenticated(false);
    }
  }, []);

  const windowSizer = () => {
    setWindowheght(window.innerHeight);
    setWindowwidth(window.innerWidth);
  };
  window.addEventListener("resize", windowSizer);

  return (
    <div className="App">
      <Navbar login={login} setLogin={setLogin} />
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
