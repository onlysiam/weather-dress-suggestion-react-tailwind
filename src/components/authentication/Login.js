import { Link } from "react-router-dom";
//image
import userIcon from "../../img/login props/user.svg";
import passIcon from "../../img/login props/pass.svg";
//Animations
import { motion } from "framer-motion";
import { loginPageAnimation } from "../Animation";
//components
import Button from "../buttons/Button";
import Input from "../inputs/Input";
import CheckedInput from "../inputs/CheckedInput";
//redux
import { useDispatch } from "react-redux";
//reducers
import { alertToggleTrue } from "../../store/alerts/alert";
import { useEffect, useState } from "react";

const Login = () => {
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState(false);
  //useEffect
  useEffect(() => {}, []);
  //handlers
  const logInHandler = (e) => {
    e.preventDefault();
    dispatch(alertToggleTrue("success"));
  };
  return (
    <form
      className="flex w-3/5 h-65% flex-wrap items-center bg-white bg-opacity-20 justify-around backdrop-blur-md shadow-2xl rounded-md px-14 py-14 z-40"
      action=""
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
          hoverBg="bg-bgpurple"
          hoverText="text-white"
        />
      </div>
      <div className="flex flex-col basis-full mt-2">
        <Link className="text-gray-700 font-medium font-ubuntu" to="reset">
          Forgot Password?
        </Link>
        <Link className="text-gray-700 font-medium font-ubuntu" to="signup">
          Create an account{" "}
        </Link>
      </div>
    </form>
  );
};

export default Login;
