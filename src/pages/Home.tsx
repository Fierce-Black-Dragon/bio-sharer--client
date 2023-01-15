import React, { useEffect } from "react";
import Auth from "./../components/Auth/Auth";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = (props: any) => {
  const {
    setLoggedInStatus,
    loggedInStatus,
    setUser,
    user,
    checkLoginStatus,
    loadingStatus,
  } = props;
  const navigate = useNavigate();
  const handleSuccessfulAuth = (data: any) => {
    props.handleLogin(data);
    props.history.push("/dashboard", navigate);
  };
  useEffect(() => {
    // if (!loadingStatus && loggedInStatus === "NOT_LOGGED_IN") {
    //   checkLoginStatus("/admin");
    // } else {
    //   console.log(loggedInStatus);
    //   navigate("/admin/dashboard");
    // }
  }, [loadingStatus]);
  return (
    <div>
      {loadingStatus ? (
        <h3>loading....</h3>
      ) : (
        <>
          <h1>Status: {props.loggedInStatus}</h1>
          <Auth handleSuccessfulAuth={handleSuccessfulAuth} />
        </>
      )}
    </div>
  );
};

export default Home;
