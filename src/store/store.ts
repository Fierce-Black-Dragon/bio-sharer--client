import { create } from "zustand";
import { User } from "../types";

interface StoreState {
  user: User;
  visitedUser: User;
  loggedInStatus: boolean;
  setUser: (nUser: User) => void;
  setVisitedUSer: (userD: User) => void;
  setLoggedInStatus: (status: boolean) => void;
}

const useStore = create<StoreState>()((set) => ({
  user: {
    email: "",
    full_name: "",
    id: 0,
    image_url: "",
    info: "",
    username: "",
    links: [],
  },
  visitedUser: {
    email: "",
    full_name: "",
    id: 0,
    image_url: "",
    info: "",
    username: "",
    links: [],
  },
  loggedInStatus: false,
  setUser: (nUser) => set(() => ({ user: nUser })),
  setVisitedUSer: (userD) => set(() => ({ visitedUser: userD })),
  setLoggedInStatus: (status) =>
    set((state) => ({
      loggedInStatus: status,
    })),
}));

export default useStore;
