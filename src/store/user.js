import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";
import { uploadPictureUrl } from "./urls";

const slice = createSlice({
  name: "user",
  initialState: {
    name: "",
    username: "",
    email: "",
    profilepic: "",
    verified: "",
    authenticated: false,
    uploading: false,
    lastFetch: null,
  },
  reducers: {
    userAdded: (users, action) => {
      users.name = action.payload[0].fname + " " + action.payload[0].lname;
      users.username = action.payload[0].username;
      users.email = action.payload[0].email;
      users.profilepic = action.payload[0].profilepic;
      users.verified = action.payload[0].verified;
      users.authenticated = true;
      //user object into storage
      localStorage.setItem(
        "weatherClosetUserInfo",
        JSON.stringify(action.payload)
      );
      // var retrievedObject = JSON.parse(
      //   localStorage.getItem("weatherClosetUserInfo")
      // );
    },

    userLogout: (users, action) => {
      users.name = "";
      users.username = "";
      users.email = "";
      users.profilepic = "";
      users.verified = "";
      users.authenticated = false;
      localStorage.removeItem("weatherClosetUserInfo");
    },
    userRemoved: (users, action) => {
      users.list.filter((user) => user.id !== action.payload.id);
    },
    uploadRequested: (users, action) => {
      users.uploading = true;
    },
    userDpAdded: (users, action) => {
      if (action.payload.url) users.profilepic = action.payload.url;
      users.uploading = false;
    },
    uploadRequestFailed: (users, action) => {
      users.uploading = false;
    },
  },
});

export const {
  uploadRequested,
  userDpAdded,
  uploadRequestFailed,
  userAdded,
  userRemoved,
  userLogout,
} = slice.actions;
export default slice.reducer;

export const uploadPicture = (file) =>
  apiCallBegan({
    url: uploadPictureUrl,
    method: "post",
    data: file,
    onStart: uploadRequested.type,
    onSuccess: userDpAdded.type,
    onError: uploadRequestFailed.type,
  });
