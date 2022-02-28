import { Link } from "react-router-dom";
//image
import userIcon from "../img/login props/user.svg";
import passIcon from "../img/login props/pass.svg";
import bg from "../img/login props/loginBg.svg";
//styled
//Animations
import { motion } from "framer-motion";
import { loginPageAnimation } from "./Animation";
//components
import Button from "./buttons/Button";
import Input from "./inputs/Input";
import CheckedInput from "./inputs/CheckedInput";

const Login = () => {
  return (
    <motion.div
      name="login"
      className="absolute h-screen max-w-2xl top-0 right-0 flex flex-col items-center justify-center z-30"
      variants={loginPageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div>
        <img
          className="absolute h-full object-cover top-0 left-0 z-10"
          src={bg}
          alt=""
        />
      </div>
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
    </motion.div>
  );
};

export default Login;
