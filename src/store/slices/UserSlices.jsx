import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"users",
    initialState:[],
    reducers:{
        addCartProducts(state,action){
        },
        removeCartProducts(state,action){

        }
    },
});

console.log(userSlice.actions);

export default userSlice.reducer;
