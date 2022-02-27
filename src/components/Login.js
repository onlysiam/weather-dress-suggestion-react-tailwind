import { Link } from "react-router-dom";
//image
import userIcon from "../img/login props/user.svg";
import passIcon from "../img/login props/pass.svg";
import bg from "../img/login props/loginBg.JPG";
//styled
//Animations
import { motion } from "framer-motion";
import { loginPageAnimation } from "./Animation";
//components
import AuthButton from "./authentication/AuthButton";

const Login = () => {
  return (
    <motion.div
      className="absolute h-screen w-2/5 top-0 right-0 flex flex-col items-center justify-center z-30"
      variants={loginPageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div>
        <div className="absolute h-full w-full top-0 left-0 z-40 bg-black bg-opacity-5"></div>
        <img className="absolute h-full top-0 left-0 z-10" src={bg} alt="" />
      </div>
      <form
        className="flex w-3/5 h-65% flex-wrap items-center bg-white bg-opacity-20 justify-around backdrop-blur-md shadow-2xl rounded-md px-14 py-14 z-40"
        action=""
      >
        <h1 className="basis-full font-ubuntu text-3xl text-darkPurple font-medium overflow-hidden z-30">
          Log In
        </h1>
        <div className="flex flex-wrap justify-center items-start mt-6">
          <div className="relative flex basis-full justify-center items-start">
            <img className="absolute h-5 left-0" src={userIcon} alt="" />
            <input
              className="border-b-2 basis-full border-gray-400 h-7 outline-none pl-6 bg-transparent text-black font-goth placeholder-gray-600"
              type="text"
              placeholder="User Name"
            />
          </div>
          <div className=" relative flex basis-full justify-center items-start mt-8">
            <img className="absolute h-5 left-0" src={passIcon} alt="" />
            <input
              className="border-b-2 basis-full border-gray-400 h-7 pl-6 outline-none bg-transparent text-black font-goth placeholder-gray-600"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="flex basis-full justify-start items-center mt-6 ">
            <input
              className="appearance-none h-4 w-4 bg-white rounded outline-none checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="checkbox"
            />
            <p className="font-ubuntu text-lg text-black font-medium ml-2">
              Remember me
            </p>
          </div>
        </div>
        <div className="basis-full mt-2">
          <AuthButton
            body="Log in"
            mr="mr-0"
            px="px-6"
            py="py-2"
            h="h-10"
            font="font-ubuntu"
          />
        </div>
        <div className="flex flex-col basis-full mt-2">
          <Link className="text-darkPurple font-medium" to="reset">
            Forgot Password?
          </Link>
          <Link className="text-darkPurple font-medium" to="signup">
            Create an account{" "}
          </Link>
        </div>
      </form>
    </motion.div>
  );
};

export default Login;
