import { useState, useRef } from "react";
import pp from "../img/pp.jpg";
//animation
import { motion } from "framer-motion";
//components
import Card from "./profile/Card";
import { pageAnimation } from "./Animation";
//redux
import { useSelector, useDispatch } from "react-redux";
import { uploadPicture } from "../store/user";
const Profile = () => {
  const hiddenFileInput = useRef(null);
  const [changeBtn, setChangeBtn] = useState(false);
  const [uploadBtn, setUploadBtn] = useState(false);
  const [dp, setDp] = useState(pp);

  const onFileChangeHandler = (e) => {
    console.log(e.target.files[0]);
    const objectUrl = URL.createObjectURL(e.target.files[0]);
    setDp(objectUrl);
    setUploadBtn(true);
    return () => URL.revokeObjectURL(objectUrl);
  };
  const changeDpHandler = () => {
    hiddenFileInput.current.click();
  };
  const newDpUploadHandler = () => {};

  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      className="flex justify-center h-screen w-screen items-center"
    >
      <div className="flex justify-center items-start h-80p w-85p gap-20 bg-white rounded-lg py-10 mt-2">
        <div className="flex flex-col justify-center items-center w-25p">
          <div
            onMouseLeave={() => setChangeBtn(false)}
            className="relative flex justify-center w-52 h-52 rounded-full overflow-hidden"
          >
            {changeBtn || uploadBtn ? (
              <div>
                <input
                  className="hidden absolute"
                  type="file"
                  ref={hiddenFileInput}
                  onChange={onFileChangeHandler}
                />
                {!uploadBtn ? (
                  <button
                    onClick={changeDpHandler}
                    className="absolute bottom-0 text-lg text-white bg-black bg-opacity-70 w-full h-10 duration-150 cursor-pointer"
                  >
                    Change
                  </button>
                ) : (
                  <button
                    onClick={newDpUploadHandler}
                    className="absolute bottom-0 text-lg text-white bg-black bg-opacity-70 w-full h-10 duration-150 cursor-pointer"
                  >
                    Upload
                  </button>
                )}
              </div>
            ) : (
              ""
            )}
            <img
              onMouseOver={() => setChangeBtn(true)}
              className="w-52 duration-150 object-cover"
              src={dp}
              alt=""
            />
          </div>

          <h1 className="text-2xl font-bold mt-3">Siam Ahmed</h1>
        </div>
        <div className="flex flex-col justify-center items-start w-75p h-96">
          <div className="flex justify-start items-center border-b border-black w-85p h-20 px-2">
            <h1 className="text-5xl font">Profile</h1>
          </div>
          <Card body1="Name" body2="Siam Ahmed" body3="Edit" />
          <Card body1="Username" body2="onlysiam" body3="Change" />
          <Card body1="Password" body2="********" body3="Change" />
          <Card body1="Email" body2="onlysiam@gmail.com" body3="Change" />
        </div>
      </div>
    </motion.div>
  );
};

export default Profile;
