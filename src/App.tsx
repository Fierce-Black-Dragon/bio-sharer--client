import React, { useState, useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Welcome from "./pages/Welcome";

const App: React.FC = () => {
  const [loggedInStatus, setLoggedInStatus] = useState("NOT_LOGGED_IN");
  const [user, setUser] = useState({});
  const [loadingStatus, setLoadingStatus] = useState(false);
  const checkLoginStatus = () => {
    setLoadingStatus(true);
    // const { path, navigate } = props;
    axios
      .get("http://localhost:3000/logged_in", { withCredentials: true })
      .then((response) => {
        setLoadingStatus(false);
        if (response.data.logged_in && loggedInStatus === "NOT_LOGGED_IN") {
          setLoggedInStatus("LOGGED_IN");
          setUser(response.data.user);
          // navigate("/admin/dashboard");
        } else if (!response.data.logged_in && loggedInStatus === "LOGGED_IN") {
          setLoggedInStatus("NOT_LOGGED_IN");
          setUser({});
          // navigate(path);
        }
      })
      .catch((error) => {
        console.log("check login error", error);
      });
  };
  const handleLogin = (data: any) => {
    setLoggedInStatus("LOGGED_IN");
    setUser(data.user);
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Welcome
          loggedInStatus={loggedInStatus}
          setLoggedInStatus={setLoggedInStatus}
          setUser={setUser}
          user={user}
          checkLoginStatus={checkLoginStatus}
          loadingStatus={loadingStatus}
        />
      ),
    },
    {
      path: "/admin",
      element: (
        <Home
          loggedInStatus={loggedInStatus}
          setLoggedInStatus={setLoggedInStatus}
          setUser={setUser}
          user={user}
          checkLoginStatus={checkLoginStatus}
          loadingStatus={loadingStatus}
          handleLogin={handleLogin}
        />
      ),
    },
    {
      path: "/admin/dashboard",
      element: (
        <Dashboard
          loggedInStatus={loggedInStatus}
          setLoggedInStatus={setLoggedInStatus}
          setUser={setUser}
          user={user}
          checkLoginStatus={checkLoginStatus}
          loadingStatus={loadingStatus}
        />
      ),
    },
  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
