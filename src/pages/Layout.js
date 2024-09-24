import { Outlet, Link } from "react-router-dom";
// import 'font-awesome/css/font-awesome.min.css';
import CartIcon from "../components/CartIcon";
import { useState,useEffect } from "react";
import { setTotalQty } from "../store/slices/productsSlices";
import { useDispatch, useSelector } from "react-redux";

const Layout = () => {

  const totalQty = useSelector(state => state.productss.totalQty);

  return (
    <>
      <nav>
        <ul className="ml-auto flex items-center space-x-2.5">
          <li className="inline-block">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/viewcart"><CartIcon totalQty={totalQty}/></Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;