import { configureStore } from "@reduxjs/toolkit";
import stateSlice from "./stateSlice";

export const store = configureStore({
    reducer: {
        stateSlice: stateSlice,
    },
});

export type rootState = ReturnType<typeof store.getState>;

export type appDispatch = typeof store.dispatch;
