import { compose, createSlice } from "@reduxjs/toolkit";
import React from "react";
import { setCartValues } from "./UserSlice";
const productsSlices=createSlice({
    name:"productss",
    initialState:{
        allProducts:[],
        totalQty:[],
        cartValues:[]
    },
    reducers:{
        setAllProducts(state,action){
            state.allProducts = action.payload.res; // Make sure action.payload.res is an array
        },
        setCartValuess(state,action){
            state.cartValues = action.payload.res;
            console.log("cartva;iesssssssssss")
        },
        setTotalQty(state,action){
            state.totalQty = action.payload.res;
        },
        removeCartProductss(state,action){
            state.splice(0,1)
            console.log("action_pu;sjfsf",action.payload)
        }

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

