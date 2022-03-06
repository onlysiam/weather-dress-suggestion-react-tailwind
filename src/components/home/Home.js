import { useNavigate } from "react-router-dom";
//images
import logo from "../../img/logo.svg";
import homeBg from "../../img/background pictures/bg-purple-shades.svg";
import { Button } from "../formComponents/FormComponents";
//components

const Home = () => {
  const navigate = useNavigate();
  return (
    <div
      id="home"
      className="flex flex-col justify-center items-center h-screen bg-primary"
    >
      <div className="background">
        <img
          className="absolute w-full left-0 bottom-0 z-10 transition duration-150"
          src={homeBg}
          alt=""
        />
      </div>
      <div className="flex justify-between items-center mt-16 w-screen h-screen z-20 px-20 lg:px-40 xl:px-60">
        <div className="flex flex-col justify-center items-start w-3/6 h-3/5 py-12 pr-16 ">
          <h1 className="text-white text-2xl lg:text-3xl font-extrabold font-ubuntu">
            Be prepared for the <span style={{ color: "#b0daff" }}>Rain</span>{" "}
            or <span style={{ color: "#FFD764" }}>Sunshine</span>
          </h1>{" "}
          <Button
            onClick={() => navigate("/dashboard")}
            body="Get Started"
            dimensions="w-48 h-16"
            text="text-white text-xl"
            screens="lg:text-2xl lg:w-56"
            font="font-semibold"
            bg="bg-accent"
            margin="mr-0 mt-8"
            border="rounded"
            hover="hover:text-white hover:bg-secondary"
          />
        </div>
        <div className="flex flex-col justify-center items-center h-3/5 w-3/6 bg-bgOpacityPointOne rounded px-4">
          <img className="h-36 lg:h-40" src={logo} alt="" />
          <h2 className="mt-8 text-2xl text-white font-semibold font-ubuntu text-center">
            Never let the weather tether you down!
          </h2>
        </div>
      </div>
    </div>
  );
};
export default Home;
