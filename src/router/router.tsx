import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Welcome from "../pages/Welcome";
import Home from "../pages/Home";
import Protected from "../pages/sub/Protected";
import UnAuthenticated from "../pages/sub/unAuthenticated";
import User from "../pages/User";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <UnAuthenticated>
        <Welcome />
      </UnAuthenticated>
    ),
  },
  {
    path: "/admin",
    element: (
      <UnAuthenticated>
        <Home />
      </UnAuthenticated>
    ),
  },
  {
    path: "/admin/dashboard",
    element: (
      <Protected>
        <Dashboard />
      </Protected>
    ),
  },
  {
    path: ":username",
    element: <User />,
  },
]);

export default router;
