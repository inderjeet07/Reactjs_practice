import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCartProducts,removeCartProducts } from "../store/slices/UserSlice";
import { compose } from "@reduxjs/toolkit";
import styled from "styled-components";
import { getAllProductApi } from "../store/slices/productsSlices";
import { setTotalQty,removeCartProductss,setCartValuess } from "../store/slices/productsSlices";
import { _addtocart } from "../Methods/normalMethods";


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
          dispatch(setTotalQty({ res: totalQuantity }));
          localStorage.setItem('cartProducts', JSON.stringify(cartValues)); // Sync localStorage
      } else {
          localStorage.removeItem('cartProducts'); // Clear if cart is empty
      }
  }, [cartValues, dispatch]);

//   const _addtocart = (id) => {
//       const productInfo = { id: id, qty: 1 };
//       const existingItemIndex = cartValues.findIndex(obj => obj.id === id);

//       if (existingItemIndex !== -1) {
//           const updatedCart = cartValues.map((item, index) => 
//               index === existingItemIndex ? { ...item, qty: item.qty + 1 } : item
//           );
//           dispatch(setCartValuess({ res: updatedCart }));
//       } else {
//           const updatedCart = [...cartValues, productInfo];
//           dispatch(setCartValuess({ res: updatedCart }));
//       }
//   };

  const _deleteCart = (id) => {
    const existingItemIndex = cartValues.findIndex(obj => obj.id === id);

    console.log("id",id)

    if (existingItemIndex !== -1) {
        const updatedCartValues = cartValues.filter(obj => obj.id !== id);

        console.log("updatedCartValues-----------",updatedCartValues)

        localStorage.setItem('cartProducts', JSON.stringify(updatedCartValues));

        setCartValuess(updatedCartValues);

        const totalQuantity = updatedCartValues.reduce((acc, obj) => {
            return acc + obj.qty;
        }, 0);

        dispatch(setTotalQty({ res: totalQuantity }));

        // console.log("cartVaulesssssss",cartValues)
        window.location.reload()

    } else {
        console.log("Item not found in cart.");
    }
}


   useEffect(() => {
          dispatch(getAllProductApi(productData));
  }, []);

  const state = useSelector(state => state);

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
                <button className="bg-midnight hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>_deleteCart(obj.id)}>Remove</button>
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