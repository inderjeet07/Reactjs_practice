import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
const initialState={
    items:[],
    status:null

}

export const productFetch=createAsyncThunk(
    "/products/productsFetch",
    async()=>{
       const response = await axios.get("http://localhost:5000/products")
       return response?.data
    }
)
const ProductsSlice=createSlice({
    name:"products",
    initialState,
    reducers:{

    },
    extraReducers: (builder) => {
        builder
            .addCase(productFetch.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(productFetch.fulfilled, (state, action) => {
                state.status = 'success'; // Fixed typo here
                state.items = action.payload;
            })
            .addCase(productFetch.rejected, (state) => {
                state.status = 'rejected';
            });
    },
})

export default ProductsSlice.reducer