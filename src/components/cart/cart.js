import React from "react";
import './cart.sass';
import {  useSelector } from "react-redux";
import CartItem from "../cart-item/cart-item";
import TotalProductsInCart from "../total-products-in-cart/total-products-in-cart";


const CartComponent = () => {
    const { cart } = useSelector((state) => state.cart);

    const products = cart.map((product) => {
        return (
            <CartItem
                key = {product.id}
                id = {product.id}
                title = {product.title}
                image = {product.image}
                description = {product.description}
                category = {product.category}
                rating = {product.rating}
                price = {product.price} 
                quantity = {product.quantity}
            />
        )
    })


    
    return (
        <div className="cart">
            <h2 className="cart-header">Yuor cart</h2>
            {products}
            <TotalProductsInCart/>
        </div>
    )

};

export default CartComponent;
