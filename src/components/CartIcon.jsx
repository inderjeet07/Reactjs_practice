import React, { useDebugValue, useState } from "react";
import { useEffect } from "react";

const CartIcon=({totalQty})=>{
    return(
        <>
        <div className="cart-icon">
             <img src="https://cdn-icons-png.flaticon.com/128/3144/3144456.png" alt="Cart" style={{ width: '24px', height: 'auto' }} />
      {/* {itemCount > 0 && ( */}
        <span className="badge badge-warning" id="lblCartCount">
          {totalQty}
        </span>
      {/* )} */}
          </div>
      {/* )} */}
      </>
    )
}
export default CartIcon