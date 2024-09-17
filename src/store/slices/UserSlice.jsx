import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const userSlice=createSlice({
    name:"users",
    initialState:{
        creamData: [],
    },
    reducers:{
        setCartValues(state,action){
            state['creamData'] = action.payload?.res
        }, 
        addCartProducts(state,action){
            state.push(action.payload)
        },
        removeCartProducts(state,action){
            state.splice(0,1)
            console.log("action_pu;sjfsf",action.payload)
        }
        
    },
});

// console.log(userSlice.actions)

export const {addCartProducts,removeCartProducts,setCartValues}=userSlice.actions;

export default userSlice.reducer;
