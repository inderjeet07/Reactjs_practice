import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCartProducts,removeCartProducts } from "../store/slices/UserSlice";
import { compose } from "@reduxjs/toolkit";
import styled from "styled-components";
import { getAllProductApi } from "../store/slices/productsSlices";
import { setTotalQty,removeCartProductss,setCartValuess } from "../store/slices/productsSlices";
import { _addtocart,_deleteCart } from "../Methods/normalMethods";


const ShopPageStyle = styled.div`
  font-size: 20px;
  color: black;
  .main-section-shopage {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    
    .right-side-dev span {
    padding: 2px;
}
    .main-shop-div {
    border: black solid;
    padding: 16px;
}

}
`;
const Shop=()=>{
  const dispatch=useDispatch();

  const data=useSelector((state)=>{
    return state.users;
  })
  
    const [productData,setProductData]=useState(
       [{
        'id':123,'name':'product1','price':20
       },
       {
        'id':234,'name':'product2','price':50
       },
       {
        'id':567,'name':'product3','price':544
       }
    ]
  
  );
  const cartValues = useSelector(state => state.productss.cartValues);

  // Load existing cart values from local storage
  useEffect(() => {
      const already_cartvalue = JSON.parse(localStorage.getItem('cartProducts')) || [];
      if (already_cartvalue.length > 0) {
          dispatch(setCartValuess({ res: already_cartvalue }));
      }
  }, [dispatch]);

  // Update total quantity and sync with local storage
  useEffect(() => {
      if (cartValues.length > 0) {
          const totalQuantity = cartValues.reduce((acc, obj) => acc + obj.qty, 0);
          console.log("totalQuantity",totalQuantity);
          dispatch(setTotalQty({ res: totalQuantity }));
          localStorage.setItem('cartValues', JSON.stringify(cartValues)); // Sync localStorage
      } else {
          localStorage.removeItem('cartValues'); // Clear if cart is empty
          dispatch(setTotalQty({ res: "" }));
      }
  }, [cartValues, dispatch]);

   useEffect(() => {
          dispatch(getAllProductApi(productData));
  }, []);

    return(
        <>
      <ShopPageStyle>
        <h1>Shop Page</h1>
        <div className="main-section-shopage">
        {productData.map(obj=>(
            <div className="main-shop-div flex">
              <div className="image-div-left-side">
               <img className="h-full w-full rounded-md object-cover max-w-lg mx-auto" src="https://images.unsplash.com/photo-1578262825743-a4e402caab76?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1051&amp;q=80" alt="Nike Air"/>
            </div>
            <div className="right-side-dev">
              <p>Product Name: {obj.name}</p>
              <p>Price: {obj.price}</p>
              <span><button className="bg-midnight hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={()=>_addtocart(obj.id,cartValues,dispatch)}
              >Add to cart</button></span>
              <span>{console.log("cartValues.filter(objs=>objs.id===obj.id)",cartValues.filter(objs=>objs.id===obj.id).length)}
                {cartValues.filter(objs=>objs.id===obj.id).length>0&&
                <button className="bg-midnight hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>_deleteCart(obj.id,dispatch)}>Remove</button>
}
              </span>
            </div>

           </div>
            
        ))
        }
        </div>
        </ShopPageStyle>
         
        </>
    )
}
export default Shop;