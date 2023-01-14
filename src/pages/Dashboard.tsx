import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
const Dashboard = (props: any) => {
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
    if (loggedInStatus === "NOT_LOGGED_IN") {
      checkLoginStatus();
    }
    if (!loadingStatus && loggedInStatus === "NOT_LOGGED_IN") {
      navigate("/admin");
    }
  }, [loadingStatus]);
  return (
    <div>
      {" "}
      <div>
        {loadingStatus ? (
          <h3>loading....</h3>
        ) : (
          <div>
            <h1>Dashboard</h1>
            <h1>Status: {props.loggedInStatus}</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
