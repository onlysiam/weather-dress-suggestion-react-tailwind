import aboutBg from "../img/background pictures/person-bg.svg";

const About = () => {
  return (
    <div className="relative h-screen w-screen">
      <div className="section"></div>
      <div className="aboutBg">
        <img className="absolute w-full top-0 left-0" src={aboutBg} alt="" />
      </div>
    </div>
  );
};

export default About;
