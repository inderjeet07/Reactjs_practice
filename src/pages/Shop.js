import React, { useState } from "react";

const Shop=()=>{
    const [productData,setProductData]=useState(
       [{
        'id':123,'name':'product1','price':20
       },
       {
        'id':234,'name':'product2','price':50
       }
    ]
    );

    const [cartValues,setCartValues]=useState([])

    const _addtocart=(id)=>{

        const productInfo = {
            id:id,
            qty:1
          };
       
        if (id) {
            // Add the new item to the existing cartValues array
            setCartValues(oldvalues => [...oldvalues, productInfo]);
        }
    }

    console.log("cartVa;skeeeeeeeeeeeeees",cartValues)

   
    return(
        <>
        <h1>Shop Page</h1>
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
            </div>
           </div>
            
        ))
        }
         
        </>
    )
}
export default Shop;