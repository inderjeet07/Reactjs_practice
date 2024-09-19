import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/UserSlice";
import productReducer from "./slices/productSlice";
// import products from "../../Backend/products";
import productsReducer from "./slices/productsSlices";
const store = configureStore({
    reducer: {
        productss: productsReducer,
        // other reducers if any
    },
});
export default store;