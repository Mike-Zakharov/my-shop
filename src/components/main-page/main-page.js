import React from "react";
import './main-page.sass'
import { useGetSingleProductQuery } from "../../services/fakestoreapi";
import MainPageComponent from "../main-page-component/main-page-component";


// В MainPageComponent передаём хук одного отдельного товара для отображения категории с картинкой
// для смены категории и картинки нужно поменять id товара в useGetSingleProductQuery(id)
const MainPage = () => {
    return (
        <>
            <h1>My Shop</h1>
            <div className="container">
                <MainPageComponent getData={useGetSingleProductQuery(12)}/>
                <MainPageComponent getData={useGetSingleProductQuery(5)}/>
                <MainPageComponent getData={useGetSingleProductQuery(2)}/>
                <MainPageComponent getData={useGetSingleProductQuery(17)}/>
            </div> 
        </>
    )
}

export default MainPage;