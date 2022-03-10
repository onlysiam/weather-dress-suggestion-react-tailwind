//images
import aboutBg from "../../img/background pictures/person-bg.svg";
import cloud from "../../img/landingpage/cloudwithrain.png";
import api from "../../img/landingpage/api.png";
import ml from "../../img/landingpage/ml.png";
import shirt from "../../img/landingpage/shirt.png";

import pixabay from "../../img/landingpage/pixabay.svg";
import openweather from "../../img/landingpage/openweather.svg";
import cloudinary from "../../img/landingpage/cloudinary.svg";
//components
import Aboutdetails from "./Aboutdetails";
const About = () => {
  return (
    <div
      id="about"
      className="relative w-screen flex flex-col justify-between items-center px-60 py-20 bg-white"
    >
      <div className="z-10">
        <img className="absolute w-full top-0 left-0" src={aboutBg} alt="" />
      </div>
      <div className="flex flex-row justify-between items-center h-full w-full">
        <h1 className="font-ubuntu text-5xl text-primary font-extrabold overflow-hidden z-20">
          Dress For The Weather
        </h1>
        <div className="flex flex-col justify-center w-3/4 items-start mt-20 z-20">
          <Aboutdetails
            flex="justify-end"
            image={cloud}
            body="Get to know the weather of your preferred destination."
          />
          <Aboutdetails
            flex="justify-end"
            image={api}
            body="Weather Closet uses the Dark Sky API to generate the exact weather
            update."
          />
          <Aboutdetails
            flex="justify-end"
            image={shirt}
            body="Get fashion suggestions based on the weather of your destination."
          />
          <Aboutdetails
            flex="justify-end"
            image={ml}
            body="Weather Closet uses machine learning to analyze a dataset and find
            the suitable clothing for a specific weather."
          />
        </div>
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <div className="flex flex-col justify-center w-3/4 items-start mt-24 z-20">
          <Aboutdetails
            image={openweather}
            body="Weather Closet use openweather's geocoding API to pin point the exact search location. Also get the weather forecast upto 30 days. "
          />
          <Aboutdetails
            image={pixabay}
            body="Get to know about the destination. Weather Closet usees pixabay API and fetch pictures of your destination."
          />
          <Aboutdetails
            image={cloudinary}
            body="Organize your profile and store your outfits' picture in cloudinary with high resolution."
          />
        </div>
        <h1 className="font-ubuntu text-5xl text-right text-primary font-extrabold overflow-hidden z-20">
          Place With The Weather
        </h1>
      </div>
    </div>
  );
};

export default About;
