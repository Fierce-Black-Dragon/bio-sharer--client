import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Welcome from "../pages/Welcome";
import Home from "../pages/Home";
import Protected from "../pages/sub/Protected";
import UnAuthenticated from "../pages/sub/unAuthenticated";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
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
]);

export default router;
