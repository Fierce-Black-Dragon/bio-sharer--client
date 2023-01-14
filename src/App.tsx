import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

const App: React.FC = () => {
  const [loggedInStatus, setLoggedInStatus] = useState("NOT_LOGGED_IN");
  const [user, setUser] = useState({});

  const checkLoginStatus = () => {
    axios
      .get("http://localhost:3000/logged_in", { withCredentials: true })
      .then((response) => {
        if (response.data.logged_in && loggedInStatus === "NOT_LOGGED_IN") {
          setLoggedInStatus("LOGGED_IN");
          setUser(response.data.user);
        } else if (!response.data.logged_in && loggedInStatus === "LOGGED_IN") {
          setLoggedInStatus("NOT_LOGGED_IN");
          setUser({});
        }
      })
      .catch((error) => {
        console.log("check login error", error);
      });
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const handleLogout = () => {
    setLoggedInStatus("NOT_LOGGED_IN");
    setUser({});
  };

  const handleLogin = (data: any) => {
    setLoggedInStatus("LOGGED_IN");
    setUser(data.user);
  };

  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path={"/"}
            render={(props: any) => (
              <Home
                {...props}
                handleLogin={handleLogin}
                handleLogout={handleLogout}
                loggedInStatus={loggedInStatus}
              />
            )}
          />
          <Route
            exact
            path={"/dashboard"}
            render={(props: any) => (
              <Dashboard {...props} loggedInStatus={loggedInStatus} />
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
