import axios from "axios";
import { NewUser, User } from "../types";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const checkLoginStatus = async () => {
  const response = await api.get("/logged_in", {
    withCredentials: true,
  });
  return response.data;
};

export const editProfile = async (formData: User) => {
  return await api.post("/profile_update", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const registerUSer = async (user: NewUser) => {
  return await api.post(
    "/registrations",
    {
      user: {
        user,
      },
    },
    { withCredentials: true }
  );
};

export const getVisitedUserData = async (username: string) => {
  const response = await api.get(`/dashboard/${username}`, {
    withCredentials: true,
  });
  return response.data;
};

// export const deleteTodo = async ({ id }) => {
//   return await todosApi.delete(`/todos/${id}`, id);
// };
