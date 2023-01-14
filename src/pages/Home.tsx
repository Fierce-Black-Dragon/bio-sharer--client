import React from "react";
import Auth from "./../components/Auth/Auth";

const Home = (props: any) => {
  const handleSuccessfulAuth = (data: any) => {
    props.handleLogin(data);
    props.history.push("/dashboard");
  };

  return (
    <div>
      homee
      <h1>Status: {props.loggedInStatus}</h1>
      <Auth handleSuccessfulAuth={handleSuccessfulAuth} />
    </div>
  );
};

export default Home;
