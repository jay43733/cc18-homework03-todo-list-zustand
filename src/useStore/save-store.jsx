import { create } from "zustand";
import { persist } from "zustand/middleware";

const saveStore = (set) => ({
  arr: [],

  addArr: (newValue) =>
    set((state) => ({
      arr: [...state.arr, { id: state.arr.length + 1, title: newValue }],
    })),

    deleteArr: (id)=>
        set((state)=>({
            arr: state.arr.filter((item)=> item.id !== id)
        }))
});

const usePersist = {
  name: "save-store",
  getStorage: () => localStorage,
};

const useStore = create(persist(saveStore, usePersist));
export default useStore;
