import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'

export const useUsersStore= create(persist((set) => ({
    user: "",
    setUser: (newValue) => set(() => ({ user: newValue})),
    //setSource: () =>set((state:any) => ({ introIntrest: !state.introIntrest}))
  }),
  {
    name: 'users-storage', // name of the item in the storage (must be unique)
    storage: createJSONStorage(() => AsyncStorage), // (optional) by default, 'localStorage' is used
  }
  
  ))