import React from "react";
import { useContext } from "react";
import App, { AppContext } from "../App";
const Profile = () => {
  const { username } = useContext(AppContext);
  return <div>PROFILE: USER IS: {username}</div>;
};

export default Profile;
