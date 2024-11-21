import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { INewSlice } from "./newSlice/newSlice.types";
import { createNewSlice } from "./newSlice/newsSlice";

export const UseAppStore = create<INewSlice>()(
    devtools((...a)=> ({
        ...createNewSlice(...a)
    }))
)