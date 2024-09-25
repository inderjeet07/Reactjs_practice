"use client"
import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { getAllProductApi } from "../store/slices/productsSlices";
import { useEffect,useState } from "react";
import { useDispatch } from "react-redux";
const CartPageStyle = styled.div`
    table {
        width: 100%;
        border-collapse: collapse;
    }
    th, td {
        text-align: left;
        padding: 8px;
        width: 25%; /* Each column will take up 25% of the width */
    }
    img {
        width: 100%; /* Makes the image responsive */
        height: auto; /* Maintains aspect ratio */
    }
    th {
        background-color: #f2f2f2; /* Optional: background color for header */
    }
    td {
        border: 1px solid #ddd; /* Optional: border for table cells */
    }

    button.increase_button {
    padding: -3px;
    border: 2px solid;
    width: 8%;
    height: 6%;
    background: green;
    color: white;
}
     button.decrease_button {
    padding: -3px;
    border: 2px solid;
    width: 8%;
    height: 6%;
    background: red;
    color: white;
}
`;

const ViewCart = () => {

    const cartProducts=JSON.parse(localStorage.getItem('cartProducts'))??"";

   const dispatch = useDispatch();

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

    useEffect(() => {
        dispatch(getAllProductApi(productData));
    }, []);
    const allProducts = useSelector(state => state?.productsSlices?.allProducts);

    console.log("all_products_products",allProducts)

    function increase(id,qty){
        console.log("id==========",id,"qty########################",qty)
    }
    function decrease(id,qty){
        console.log("id==========",id,"qty########################",qty)
    }

    // const state = useSelector(state => state);
    // console.log("state",state);
    return (
        <CartPageStyle>
            <div className="main-view-cart-section">
                <div className="products-details-section">
                    <h1>Product details</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Product image</th>
                                <th>Product Name</th>
                                <th>Product Price</th>
                                <th>Product qty</th>
                            </tr>
                        </thead>
                        <tbody>
                         {cartProducts.map((obj)=>(                     
                            <tr>
                                <td><img src="https://images.unsplash.com/photo-1578262825743-a4e402caab76" alt="Nike Air" /></td>
                                <td>Dummy Name</td>
                                <td>$54.64</td>
                                <td>
                                    <button className="decrease_button" onClick={()=>decrease(obj.id,obj.qty)}>-</button>
                                     <input type="text" value={obj.qty} style={{border:"2px solid",width:"10%",textAlign:"center"}}/>
                                    <button onClick={()=>increase(obj.id,obj.qty)} className="increase_button">+</button></td>
                            </tr>

                          ))
                         }
                            {/* <tr>
                                <td><img src="https://images.unsplash.com/photo-1578262825743-a4e402caab76?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1051&amp;q=80" alt="Nike Air" /></td>
                                <td>Dummy Name</td>
                                <td>$54.64</td>
                                <td>2</td>
                            </tr> */}
                        </tbody>
                    </table>
                </div>
            </div>
        </CartPageStyle>
    );
};

export default ViewCart;
