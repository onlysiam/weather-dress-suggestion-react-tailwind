//components
import Socials from "./Socials";
const Footer = () => {
  return (
    <div
      id="contact"
      className="flex flex-col justify-center items-center bg-compliment h-52 gap-4 sm:gap-6"
    >
      <Socials />
      <div className="flex flex-col justify-center items-center sm:items-start">
        <p className="text-white text-sm sm:text-base font-light">
          Developed By Siam Ahmed.
        </p>
        <p
          onClick={() => {
            window.open("https://onlysiam.com");
          }}
          className="text-white text-sm sm:text-base font-light"
        >
          <span className="text-primary font-normal cursor-pointer hover:text-secondary duration-700">
            ©ONLYSIAM
          </span>{" "}
          2022. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
