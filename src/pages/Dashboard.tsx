import React from "react";

const Dashboard = (props: any) => {
  return (
    <div>
      {" "}
      <div>
        <div>
          <h1>Dashboard</h1>
          <h1>Status: {props.loggedInStatus}</h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
