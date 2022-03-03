import { Link } from "react-router-dom";
import Axios from "axios";
//image
import userIcon from "../../img/login props/user.svg";
import passIcon from "../../img/login props/pass.svg";
//Animations
import { motion } from "framer-motion";
import { loginSignupPageAnimation } from "../Animation";
//components
import { Button, Input, CheckedInput } from "../formComponents/FormComponents";
//redux
import { useDispatch } from "react-redux";
//reducers
import { alertToggleTrue } from "../../store/alerts/alert";
import { loginWindowToggle } from "../../store/loaders/loginWindow";
import { signupWindowToggle } from "../../store/loaders/signupWindow";
import { useEffect, useState } from "react";
import axios from "axios";

const Login = () => {
  const dispatch = useDispatch();

  //handlers
  const logInHandler = (e) => {
    e.preventDefault();

    Axios.get("http://localhost:3001/currentweather").then((response, err) => {
      console.log("yo");
      if (response.data.message) {
        console.log("success");
        console.log(response.data.message);
      } else {
        console.log(response.data);
        console.log(err);
      }
    });

    dispatch(
      alertToggleTrue({ type: "success", message: "Successfully Logged In." })
    );
  };

  const signupWindowHandler = () => {
    dispatch(loginWindowToggle());
    dispatch(signupWindowToggle());
  };
  return (
    <motion.form
      className="flex w-3/5 h-65% flex-wrap items-center bg-white bg-opacity-30 justify-around backdrop-blur-md shadow-2xl rounded-md px-14 py-14 z-40"
      variants={loginSignupPageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h1 className="basis-full font-ubuntu text-3xl text-gray-700 font-medium overflow-hidden z-30">
        Log In
      </h1>
      <div className="flex flex-wrap justify-center items-start mt-6">
        <div className="basis-full justify-center items-start">
          <Input
            image={userIcon}
            placeholder="User name"
            basis="basis-full"
            pl="pl-6"
          />
        </div>
        <div className="basis-full justify-center items-start mt-8">
          <Input
            type="password"
            placeholder="Password"
            image={passIcon}
            basis="basis-full"
            pl="pl-6"
          />
        </div>
        <div className="flex basis-full justify-start items-center mt-6 ">
          <CheckedInput body="Remember me" />
        </div>
      </div>
      <div className="basis-full mt-2">
        <Button
          onClick={logInHandler}
          body="Log in"
          mr="mr-0"
          px="px-6"
          py="py-2"
          h="h-10"
          font="font-ubuntu"
          bg="bg-red-500"
          hoverBg="hover:bg-primary"
          hoverText="hover:text-white"
        />
      </div>
      <div className="flex flex-col basis-full mt-2">
        <Link
          className="text-gray-700 font-medium font-ubuntu hover:text-primary duration-150"
          to="reset"
        >
          Forgot Password?
        </Link>
        <Link
          onClick={signupWindowHandler}
          className="text-gray-700 font-medium font-ubuntu hover:text-primary duration-150"
          to="#"
        >
          Create an account{" "}
        </Link>
      </div>
    </motion.form>
  );
};

export default Login;
