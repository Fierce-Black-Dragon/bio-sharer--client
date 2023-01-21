import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { checkLoginStatus } from "./../api/index";

const Welcome = (props: any) => {
  return (
    <div>
      {" "}
      <h3>Welcome</h3>
      <Link to={"/admin"}>login</Link>
    </div>
  );
};

export default Welcome;
