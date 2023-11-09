import React from "react";
import './main-page.sass'
import Electronics from "../main-page-components/electronics";
import Jewelery from "../main-page-components/jewelery";
import MensClothing from "../main-page-components/mens-clothing";
import WomensClothing from "../main-page-components/womens-clothing";


const MainPage = () => {
    return (
        <>
            <h1>My Shop</h1>
            <div className="container">
                <Electronics />
                <Jewelery />
                <MensClothing />
                <WomensClothing />
            </div> 
        </>
    )
}

export default MainPage;