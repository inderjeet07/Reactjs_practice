import { createSlice } from "@reduxjs/toolkit";
import React from "react";
const productsSlices=createSlice({
    name:"productss",
    initialState:{
        allProducts:[],
        totalQty:[]
    },
    reducers:{
        setAllProducts(state,action){
            state.allProducts = action.payload.res; // Make sure action.payload.res is an array
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


export const { setAllProducts,setTotalQty,removeCartProductss } = productsSlices.actions;

  export const getAllProductApi = (res,section = "allProduct") => dispatch => {
    console.log("inside_the_api")
 
        if (res) {
            dispatch(setAllProducts({ res, section }));
            // dispatch(setIsLoading(false));
        }
};


export default productsSlices.reducer;

