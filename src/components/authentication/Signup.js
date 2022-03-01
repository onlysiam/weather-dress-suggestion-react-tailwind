import { Link } from "react-router-dom";
//image
import userIcon from "../../img/login props/user.svg";
import passIcon from "../../img/login props/pass.svg";
//Animations
import { motion } from "framer-motion";
import { loginSignupPageAnimation } from "../Animation";
//components
import Button from "../buttons/Button";
import Input from "../inputs/Input";
import CheckedInput from "../inputs/CheckedInput";
//redux
import { useDispatch } from "react-redux";
//reducers
import { alertToggleTrue } from "../../store/alerts/alert";
import { loginWindowToggle } from "../../store/loaders/loginWindow";
import { signupWindowToggle } from "../../store/loaders/signupWindow";
import { useEffect, useState } from "react";

const Signup = () => {
  const dispatch = useDispatch();

  //handlers
  const signupHandler = (e) => {
    e.preventDefault();

    dispatch(
      alertToggleTrue({
        type: "success",
        message: "Account Created Successfully.",
      })
    );
  };
  const loginWindowHandler = () => {
    dispatch(loginWindowToggle());
    dispatch(signupWindowToggle());
  };
  return (
    <motion.form
      className="flex w-3/4 h-100 flex-wrap items-center bg-white bg-opacity-20 justify-around backdrop-blur-md shadow-2xl rounded-md px-14 py-10 z-40"
      action=""
      variants={loginSignupPageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h1 className="basis-full font-ubuntu text-3xl text-gray-700 font-medium overflow-hidden z-30">
        Create An Account
      </h1>
      <div className="flex flex-wrap justify-center items-start mt-6 mb-6">
        <h1 className="basis-full font-ubuntu text-xl text-gray-700 font-medium overflow-hidden z-30 mb-6">
          Login Credentials
        </h1>
        <div className="flex basis-full justify-center items-start">
          <Input
            placeholder="Username"
            basis="basis-full"
            pl="pl-0"
            mr="mr-6"
          />
          <Input
            type="text"
            placeholder="Password of 8 characters"
            basis="basis-full"
            pl="pl-0"
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-start">
        <h1 className="basis-full font-ubuntu text-xl text-gray-700 font-medium overflow-hidden z-30 mb-6">
          User Info
        </h1>
        <div className="flex basis-full justify-center items-start">
          <Input
            placeholder="First Name"
            basis="basis-full"
            pl="pl-0"
            mr="mr-6"
          />
          <Input placeholder="Last Name" basis="basis-full" pl="pl-0" />
        </div>
        <div className="basis-full justify-center items-start mt-6">
          <Input
            type="text"
            placeholder="Enter a valid email address"
            basis="basis-full"
            pl="pl-0"
          />
        </div>
      </div>
      <div className="basis-full mt-6">
        <Button
          onClick={signupHandler}
          body="Sign up"
          mr="mr-0"
          px="px-6"
          py="py-2"
          h="h-10"
          font="font-ubuntu"
          bg="bg-red-500"
          hoverBg="hover:bg-bgpurple"
          hoverText="hover:text-white"
        />
      </div>
      <div className="flex flex-col basis-full mt-2">
        <Link
          onClick={loginWindowHandler}
          className="text-gray-700 font-medium font-ubuntu"
          to="#"
        >
          Already have an accound? Login.
        </Link>
      </div>
    </motion.form>
  );
};

export default Signup;
