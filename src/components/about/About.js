//images
import aboutBg from "../../img/background pictures/person-bg.svg";
import cloud from "../../img/landingpage/cloudwithrain.png";
import api from "../../img/landingpage/api.png";
import ml from "../../img/landingpage/ml.png";
import shirt from "../../img/landingpage/shirt.png";
//components
import Aboutdetails from "./Aboutdetails";
const About = () => {
  return (
    <div
      name="about"
      className="relative h-screen w-screen flex flex-row justify-between items-center pl-72 pr-60 bg-white"
    >
      <div className="z-10">
        <img className="absolute w-full top-0 left-0" src={aboutBg} alt="" />
      </div>
      <h1 className="font-ubuntu text-5xl text-bgpurple font-extrabold overflow-hidden z-20">
        Dress For The Weather
      </h1>
      <div className="flex flex-col justify-center w-3/4 items-start  mt-10 z-20">
        <Aboutdetails
          image={cloud}
          body="Get to know the weather of your preferred destination."
        />
        <Aboutdetails
          image={api}
          body="Weather Closet uses the Dark Sky API to generate the exact weather
            update."
        />
        <Aboutdetails
          image={shirt}
          body="Get fashion suggestions based on the weather of your destination."
        />
        <Aboutdetails
          image={ml}
          body="Weather Closet uses machine learning to analyze a dataset and find
            the suitable clothing for a specific weather."
        />
      </div>
    </div>
  );
};

export default About;
