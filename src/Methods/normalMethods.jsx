import React from "react";
import { setCartValuess,removeCartProductss } from "../store/slices/productsSlices";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export function _addtocart (id,cartValues,dispatch) {

    // const cartValues = useSelector(state => state.productss.cartValues);

    // const dispatch=useDispatch();


    console.log("id##########################",id);


    const productInfo = { id: id, qty: 1, };
    const existingItemIndex = cartValues.findIndex(obj => obj.id === id);

    if (existingItemIndex !== -1) {
        const updatedCart = cartValues.map((item, index) => 
            index === existingItemIndex ? { ...item, qty: item.qty + 1 } : item
        );
        dispatch(setCartValuess({ res: updatedCart }));
    } else {
        const updatedCart = [...cartValues, productInfo];
        dispatch(setCartValuess({ res: updatedCart }));
    }
};

export function increase(id,cartValues,dispatch){

    console.log("id##########################",id);


    const productInfo = { id: id, qty: 1 };
    const existingItemIndex = cartValues.findIndex(obj => obj.id === id);

    if (existingItemIndex !== -1) {
        const updatedCart = cartValues.map((item, index) => 
            index === existingItemIndex ? { ...item, qty: item.qty + 1 } : item
        );
        dispatch(setCartValuess({ res: updatedCart }));
    } else {
        const updatedCart = [...cartValues, productInfo];
        dispatch(setCartValuess({ res: updatedCart }));
    }
    // console.log("id==========",id,"qty########################",qty)
}
export function decrease(id,cartValues,dispatch){

    console.log("id##########################",id);


    const productInfo = { id: id, qty: 1 };
    const existingItemIndex = cartValues.findIndex(obj => obj.id === id);

    if (existingItemIndex !== -1 ) {
        const updatedCart = cartValues.map((item, index) => 
            index === existingItemIndex ? { ...item, qty: item.qty!==0? item.qty - 1:1 } : item
        );
        dispatch(setCartValuess({ res: updatedCart }));
    } else {
        const updatedCart = [...cartValues, productInfo];
        dispatch(setCartValuess({ res: updatedCart }));
    }
    // console.log("id==========",id,"qty########################",qty)
}

export const _deleteCart = (id,dispatch) => {

    dispatch(removeCartProductss(id))
}

