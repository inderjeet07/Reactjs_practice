import { configureStore } from "@reduxjs/toolkit";
import { userSlice, userSliceSS } from "./slices/UserSlices";

const store = configureStore({
    reducer:{
        users: userSlice,
    },
});
export default store;