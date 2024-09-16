import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const userSlice=createSlice({
    name:"users",
    initialState:[],
    reducers:{
        addCartProducts(state,action){
            state.push(action.payload)
            console.log("action-------",action.payload)
        },
        removeCartProducts(state,action){
            state.splice(0,1)
            console.log("action_pu;sjfsf",action.payload)
        }
        
    },
});

console.log(userSlice.actions)

export const {addCartProducts,removeCartProducts}=userSlice.actions;

export default userSlice.reducer;
