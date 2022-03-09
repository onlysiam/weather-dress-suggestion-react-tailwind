import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import dpAlt from "../img/profile props/profile picture placeholder.svg";
//animation
import { motion } from "framer-motion";
//components
import Card from "./profile/Card";
import { pageAnimation } from "./Animation";
//function
import { encodingImage } from "../functions/functions";
//redux
import { useSelector, useDispatch } from "react-redux";
//reducer
import { uploadPicture } from "../store/user";
import { alertToggleTrue } from "../store/alerts/alert";
import { authWindowToggleTrue } from "../store/loaders/authWindow";
import { loginWindowToggleTrue } from "../store/loaders/loginWindow";
const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.entities.user);
  const hiddenFileInput = useRef(null);
  const [dp, setDp] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [changeBtn, setChangeBtn] = useState(false);
  const [uploadBtn, setUploadBtn] = useState(false);
  const [uploading, setUploading] = useState(false);

  //useEffect
  useEffect(() => {
    if (!userInfo.authenticated) {
      setTimeout(() => {
        dispatch(loginWindowToggleTrue());
        dispatch(authWindowToggleTrue());
      }, 500);
      navigate("/home");
    }
    if (!dp) {
      setDp(dpAlt);
    }
  }, []);
  useEffect(() => {
    if (userInfo.profilepic) setDp(userInfo.profilepic);
    if (userInfo.profilepic && uploadBtn) {
      setDp(userInfo.profilepic);
      dispatch(
        alertToggleTrue({
          type: "success",
          message: "Profile Picture Has Been Updated.",
        })
      );
      setUploading(false);
      setUploadBtn(false);
    }
  }, [userInfo.profilepic]);
  const onFileChangeHandler = async (e) => {
    setSelectedFile(await encodingImage(e.target.files[0]));
    const objectUrl = URL.createObjectURL(e.target.files[0]);
    setDp(objectUrl);
    setUploadBtn(true);
    return () => URL.revokeObjectURL(objectUrl);
  };
  const changeDpHandler = () => {
    hiddenFileInput.current.click();
  };
  const newDpUploadHandler = () => {
    const username = userInfo.username;
    const jsonData = JSON.stringify(selectedFile);
    setUploading(true);
    dispatch(uploadPicture({ username, jsonData }));
  };

  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      className="flex justify-center h-screen w-screen items-center"
    >
      <div className="flex justify-center items-start h-80p w-85p gap-20 bg-white rounded-lg py-10 mt-4">
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
            {uploading ? (
              <div className="absolute h-full w-full bg-gray-400 bg-opacity-70"></div>
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

          <h1 className="text-2xl font-bold mt-3">{userInfo.name}</h1>
        </div>
        <div className="flex flex-col justify-center items-start w-75p h-96">
          <div className="flex justify-start items-center border-b border-black w-85p h-20 px-2">
            <h1 className="text-5xl font">Profile</h1>
          </div>
          <Card body1="Name" body2={userInfo.name} body3="Edit" />
          <Card body1="Username" body2={userInfo.username} body3="Change" />
          <Card body1="Password" body2="********" body3="Change" />
          <Card body1="Email" body2={userInfo.email} body3="Change" />
        </div>
      </div>
    </motion.div>
  );
};

export default Profile;
