import { compose, createSlice } from "@reduxjs/toolkit";
import React from "react";
import { setCartValues } from "./UserSlice";
const productsSlices=createSlice({
    name:"productss",
    initialState:{
        allProducts:[],
        totalQty:[],
        cartValues:JSON.parse(localStorage.getItem("cartValues")) || [],
    },
    reducers:{
        setAllProducts(state,action){
            state.allProducts = action.payload.res; // Make sure action.payload.res is an array
        },
        setCartValuess(state, action) {
            state.cartValues = action.payload.res;
            // Update localStorage whenever cartValues change
            localStorage.setItem("cartValues", JSON.stringify(action.payload.res));
            console.log("Cart values updated:", action.payload.res);
          },
        setTotalQty(state,action){
            state.totalQty = action.payload.res;
        },
        // removeCartProductss(state,action){
        //     state.splice(0,1)
        //     console.log("action_pu;sjfsf",action.payload)
        // },
        removeCartProductss(state, action) {
            // Assuming action.payload is the index or id of the product to remove
            state.cartValues = state.cartValues.filter(
              (product) => product.id !== action.payload // Update according to your product structure
            );
            // Update localStorage after removing the product
            localStorage.setItem("cartValues", JSON.stringify(state.cartValues));
            console.log("Cart values after removal:", state.cartValues);
          },

    }
})


export const { setAllProducts,setTotalQty,removeCartProductss,setCartValuess } = productsSlices.actions;

  export const getAllProductApi = (res,section = "allProduct") => dispatch => {
    console.log("inside_the_api")
 
        if (res) {
            dispatch(setAllProducts({ res, section }));
            // dispatch(setIsLoading(false));
        }
};


export default productsSlices.reducer;

