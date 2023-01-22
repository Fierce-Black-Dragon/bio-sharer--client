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
    visitedUser,
    loggedInStatus,
    setUser,
    setVisitedUSer,
    setLoggedInStatus,
  } = useStore((state) => state);
  const navigate = useNavigate();
  useEffect(() => {
    if (loggedInStatus) {
      navigate("/admin/dashboard");
    }
  }, [loggedInStatus]);
  return (
    <div>
      <Auth />
    </div>
  );
};

export default Home;
