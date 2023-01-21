import axios from "axios";
export const checkLogin = () => {
  //   setLoadingStatus(true);
  axios
    .get("http://localhost:3000/logged_in", { withCredentials: true })
    .then((response) => {
      //   setLoadingStatus(false);
      //   if (response.data.logged_in && loggedInStatus === "NOT_LOGGED_IN") {
      //     // setLoggedInStatus("LOGGED_IN");
      //     // setUser(response.data.user);
      //     // setUserD(response.data.user);
      //     // navigate("/admin/dashboard");
      //   } else if (!response.data.logged_in && loggedInStatus === "LOGGED_IN") {
      //     // setLoggedInStatus("NOT_LOGGED_IN");
      //     // setUser({});
      //     // navigate(path);
      //   }
    })
    .catch((error) => {
      console.log("check login error", error);
    });
};
