import React from "react";
import './total-products-in-cart.sass';
import {  useSelector } from "react-redux";
import { Link } from "react-router-dom";

const TotalProductsInCart = () => {

    const { cart } = useSelector((state) => state.cart);

    let totalQuantity = 0;
    let totalPrice = 0;

    cart.map((item) => {
        totalQuantity += item.quantity;
        totalPrice += item.price * item.quantity;
        return {totalQuantity, totalPrice}

    })


    return (
        <div className="total-products-in-cart">
            <div>
                TOTAL PRODUCTS: <span>{totalQuantity}</span>
            </div>
            <div>
                TOTAL PRICE: <span>{totalPrice.toFixed(2)} $</span>
            </div>
            <div>
                <Link to='/thanks-page'>
                    <button className="btn btn_buy-all">BUY ALL</button>
                </Link>
            </div>
        </div>
    )
};

export default TotalProductsInCart;