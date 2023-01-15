import create from "zustand";

interface StoreState {
  user: object;
  vistedUser: object;
  setUser: (nUser: object) => void;
  setVisitedUSer: (userD: object) => void;
}

const useStore = create<StoreState>()((set) => ({
  user: {},
  vistedUser: {},
  setUser: (nUser) => set((state) => ({ user: nUser })),
  setVisitedUSer: (userD: any) => set((state) => ({ vistedUser: userD })),
}));

export default useStore;
