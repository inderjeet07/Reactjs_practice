import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCartProducts,removeCartProducts,setCartValues } from "../store/slices/UserSlice";
import { compose } from "@reduxjs/toolkit";
import styled from "styled-components";
import { getAllProductApi } from "../store/slices/productsSlices";
import { setTotalQty,removeCartProductss } from "../store/slices/productsSlices";


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
  let already_cartvalue=[];

    already_cartvalue=JSON.parse(localStorage.getItem('cartProducts'))||[];

    const [cartValues,setCartValuess]=useState(already_cartvalue);



  useEffect(() => {
    console.log("insdie_thissssssssss")
    if(cartValues.length>0){
  const totalQuantity = cartValues.reduce((acc, obj) => {
      return acc + obj.qty;
  }, 0);
  dispatch(setTotalQty({ res: totalQuantity }));
    }
}, [cartValues]); //


console.log("cartValues",cartValues)

    useEffect(()=>{

      if(cartValues.length>0){

      localStorage.setItem('cartProducts',JSON.stringify(cartValues));

      }
    },[cartValues])

    setCartValues(productData);

    const _addtocart=(id)=>{

        const productInfo = {
            id:id,
            qty:1
          };
          let already_exist_value;

          if(cartValues){

           already_exist_value = cartValues?.filter((obj) => obj?.id == id);


          }

          if(already_exist_value.length>0){
            const existingItemIndex = cartValues.findIndex(obj => obj.id === id);
            // if (existingItemIndex !== -1) {
              // If the item exists, update its quantity
              setCartValuess(prevData => {
                  const updatedCart = [...prevData];
                  updatedCart[existingItemIndex].qty += 1; // Increase the quantity
                  return updatedCart;
              });
          // }
        }else{

          setCartValuess(prevData=>[...prevData,productInfo]);
          }
       
          // if(cartValues.length>0){
          //   localStorage.setItem('cartProducts',JSON.stringify(cartValues));

          // }
        // if (id) {
        //     // Add the new item to the existing cartValues array
        //     dispatch(addCartProducts(productInfo));
        // }
    }

    const _deleteCart = (id) => {
      // Assuming cartValues is mutable, you can modify it directly
      const existingItemIndex = cartValues.findIndex(obj => obj.id === id);
  
      console.log("existingItemIndex", existingItemIndex);
  
      if (existingItemIndex !== -1) {
          // Remove one item at the found index
          cartValues.splice(existingItemIndex, 1);
          console.log("Item removed. Updated cartValues:", cartValues);

          // setCartValues([...cartValues]); // To trigger a re-render

                  // Update localStorage with the new cartValues
                  localStorage.setItem('cartProducts', JSON.stringify(cartValues));

                  setCartValuess(cartValues)

                  // if(cartValues.length>0){
                    console.log("insdie_the_carvalsfljslf")
                    const totalQuantity = cartValues.reduce((acc, obj) => {
                        return acc + obj.qty;
                    }, 0);
                    dispatch(setTotalQty({ res: totalQuantity }));
                      // }
        
        console.log("Item removed. Updated cartValues:", cartValues);


          // localStorage.setItem('cartProducts',JSON.stringify(...cartValues));



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
              onClick={()=>_addtocart(obj.id)}
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