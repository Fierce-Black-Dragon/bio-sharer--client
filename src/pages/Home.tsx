import React, { useEffect } from "react";
import Auth from "./../components/Auth/Auth";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useStore from "./../store/store";

const Home = () => {
  // const {
  //   setLoggedInStatus,
  //   loggedInStatus,
  //   setUser,
  //   user,
  //   checkLoginStatus,
  //   loadingStatus,
  // } = props;
  // const navigate = useNavigate();
  // const handleSuccessfulAuth = (data: any) => {
  //   props.handleLogin(data);
  //   props.history.push("/dashboard", navigate);
  // };
  const {
    user,
    vistedUser,
    loggedInStatus,
    setUser,
    setVisitedUSer,
    setLoggedInStatus,
  } = useStore((state) => state);
  const navigate = useNavigate();
  useEffect(() => {
    if (loggedInStatus === "LOGGED_IN") {
      navigate("/admin/dashboard");
    }
  }, [loggedInStatus]);
  return (
    <div>
      {/* {loadingStatus ? (
        <h3>loading....</h3>
      ) : (
        <>
          <h1>Status: {props.loggedInStatus}</h1>
          <Auth handleSuccessfulAuth={handleSuccessfulAuth} />
        </>
      )} */}
      login
    </div>
  );
};

export default Home;
