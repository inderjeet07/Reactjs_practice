import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/UserSlice";
import productReducer from "./slices/productSlice";
// import products from "../../Backend/products";
const store = configureStore({
    reducer:{
        products:productReducer,
        // users:userSlice
    },
});
export default store;