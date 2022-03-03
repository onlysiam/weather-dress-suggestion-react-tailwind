import { Link } from "react-router-dom";
//images
import logo from "../../img/logo.svg";
import homeBg from "../../img/background pictures/bg-purple-shades.svg";
import { Button } from "../formComponents/FormComponents";
//components

const Home = () => {
  return (
    <div
      name="home"
      className="flex flex-col justify-center items-center h-screen bg-primary"
    >
      <div className="background">
        <img
          className="absolute w-full left-0 bottom-0 z-10 transition duration-150"
          src={homeBg}
          alt=""
        />
      </div>
      <div className="flex justify-between items-center mt-16 w-screen h-screen z-20 px-60">
        <div className="flex flex-col justify-center items-start w-3/6 h-3/5 py-12 pr-16 ">
          <h1 className="text-white text-3xl font-extrabold font-ubuntu">
            Be prepared for the <span style={{ color: "#b0daff" }}>Rain</span>{" "}
            or <span style={{ color: "#FFD764" }}>Sunshine</span>
          </h1>{" "}
          <Link className="mt-8" to={"/dashboard"}>
            <Button
              body="Get Started"
              h="h-16"
              w="w-56"
              textSize="text-2xl"
              fontWeight="font-semibold"
              bg="bg-accent"
              mr="mr-0"
              rounded="rounded-md"
              hoverText="hover:text-white"
              hoverBg="hover:bg-secondary"
            />
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center h-3/5 w-3/6 bg-bgOpacityPointOne rounded">
          <img className="h-40" src={logo} alt="" />
          <h2 className="mt-8 text-2xl text-white font-semibold font-ubuntu">
            Never let the weather tether you down!
          </h2>
        </div>
      </div>
    </div>
  );
};
export default Home;
