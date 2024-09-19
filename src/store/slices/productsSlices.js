import { createSlice } from "@reduxjs/toolkit";
import React from "react";
const productsSlices=createSlice({
    name:"productss",
    initialState:{
        allProducts:[],
    },
    reducers:{
        setAllProducts(state,action){
            state.allProducts = action.payload.res; // Make sure action.payload.res is an array
            console.log("action.payload.res---------",action.payload.res,"state.allProducts",state.allProducts)
        }
    }
})


export const { setAllProducts } = productsSlices.actions;

  export const getAllProductApi = (res,section = "allProduct") => dispatch => {
    console.log("inside_the_api")
 
        if (res) {
            dispatch(setAllProducts({ res, section }));
            // dispatch(setIsLoading(false));
        }
};


export default productsSlices.reducer;

