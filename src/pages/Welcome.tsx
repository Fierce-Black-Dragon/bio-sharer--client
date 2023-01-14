import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Welcome = (props: any) => {
  const {
    setLoggedInStatus,
    loggedInStatus,
    setUser,
    user,
    checkLoginStatus,
    loadingStatus,
  } = props;
  const navigate = useNavigate();
  useEffect(() => {
    if (!loadingStatus && loggedInStatus === "NOT_LOGGED_IN") {
      checkLoginStatus();
    } else {
      navigate("/admin/dashboard");
    }
  }, [loadingStatus]);

  return <div>{loadingStatus ? <h3>loading...</h3> : <h3>Welcome</h3>}</div>;
};

export default Welcome;
