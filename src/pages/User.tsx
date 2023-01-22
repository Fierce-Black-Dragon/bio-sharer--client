import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getVisitedUserData } from "../api";

const User = () => {
  let { username } = useParams();
  const userToVisit = username ? username.replace("@", "") : "";
  useEffect(() => {
    const data = getVisitedUserData(userToVisit);
    console.log(data);
  }, []);
  console.log(username?.replace("@", ""));
  return <div>User {username?.replace("@", "")}</div>;
};

export default User;
