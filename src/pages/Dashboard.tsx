import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import ProfileForm from "../components/Dashboard.jsx/ProfileForm";
import useStore from "./../store/store";
const Dashboard = () => {
  return (
    <div>
      {" "}
      <div>
        <div>
          <h1>Dashboard</h1>
          <br />
          <ProfileForm />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
