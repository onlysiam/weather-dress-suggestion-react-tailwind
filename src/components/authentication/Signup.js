import React, { useState } from "react";

import { Link } from "react-router-dom";
//Animations
import { motion } from "framer-motion";
import { loginSignupPageAnimation } from "../Animation";
//components
import { Button, Input } from "../formComponents/FormComponents";
//redux
import { useDispatch } from "react-redux";
//reducers
import { alertToggleTrue } from "../../store/alerts/alert";
import { loginWindowToggle } from "../../store/loaders/loginWindow";
import { signupWindowToggle } from "../../store/loaders/signupWindow";
import { register } from "../../store/auth";
import { uploadPicture } from "../../store/user";

const Signup = () => {
  const dispatch = useDispatch();
  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  //handlers
  const fnameHandler = (e) => {
    setFname(e.target.value);
  };
  const lnameHandler = (e) => {
    setLname(e.target.value);
  };
  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const signupHandler = (e) => {
    e.preventDefault();

    dispatch(register({ fname, lname, username, password, email }));

    // dispatch(
    //   alertToggleTrue({
    //     type: "success",
    //     message: "Account Created Successfully.",
    //   })
    // );
  };
  const loginWindowHandler = () => {
    dispatch(loginWindowToggle());
    dispatch(signupWindowToggle());
  };
  return (
    <motion.form
      className="flex w-3/5 h-100 flex-wrap items-center bg-white bg-opacity-30 justify-around backdrop-blur-md shadow-2xl rounded-md px-14 py-10 z-40"
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
            onChange={usernameHandler}
            value={username}
            placeholder="Username"
            basis="basis-full"
            pl="pl-0"
            mr="mr-6"
          />
          <Input
            onChange={passwordHandler}
            value={password}
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
            onChange={fnameHandler}
            value={fname}
            placeholder="First Name"
            basis="basis-full"
            pl="pl-0"
            mr="mr-6"
          />
          <Input
            onChange={lnameHandler}
            value={lname}
            placeholder="Last Name"
            basis="basis-full"
            pl="pl-0"
          />
        </div>
        <div className="basis-full justify-center items-start mt-6">
          <Input
            onChange={emailHandler}
            value={email}
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
          margin="mr-0"
          padding="px-6 py-2"
          dimensions="h-10"
          font="font-ubuntu font-bold"
          bg="bg-red-500"
          hover="hover:bg-primary hover:text-white"
        />
      </div>
      <div className="flex flex-col basis-full mt-2">
        <Link
          onClick={loginWindowHandler}
          className="text-gray-700 font-medium font-ubuntu hover:text-primary duration-150"
          to="#"
        >
          Already have an accound? Login.
        </Link>
      </div>
    </motion.form>
  );
};

export default Signup;
