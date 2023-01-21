import React, { useEffect, useMemo } from "react";
import { useQuery, useQueryClient } from "react-query";
import { checkLoginStatus } from "../../api/index";
import useStore from "../../store/store";
import { Navigate } from "react-router-dom";

type Props = {
  children: JSX.Element;
};

const UnAuthenticated: React.FC<Props> = ({ children }) => {
  const queryClient = useQueryClient();
  const { isLoading, isError, error, data } = useQuery(
    ["user"],
    checkLoginStatus
  );
  const { setUser, setLoggedInStatus } = useStore((state) => state);

  useEffect(() => {
    if (data && data.logged_in) {
      setUser(data.user);
      setLoggedInStatus(data.logged_in);
    }
  }, [data, setUser, setLoggedInStatus]);

  const loggedInStatus = useMemo(() => data?.logged_in, [data]);

  if (isLoading) {
    return <p>loading</p>;
  }

  return !loggedInStatus ? (
    children
  ) : (
    <Navigate to={"/admin/dashboard"} replace />
  );
};

export default UnAuthenticated;
