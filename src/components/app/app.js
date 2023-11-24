import React from "react";
import './app.sass'
import Header from "../header/header";
import { Outlet } from "react-router-dom";
import Footer from "../footer/footer";
import { useGetAllCategoriesQuery } from "../../services/fakestoreapi";
import ErrorIndicator from "../error-indicator/error-indicator";

const App = () => {
    // Делаю вывод ошибки вместо всего приложения
    const {isLoading, error} = useGetAllCategoriesQuery();
    if( isLoading ) {
        return <p>Loading...</p>
    }
    if( error ){
        return <ErrorIndicator error={error.status} /> 
    }

    return (
        <section>
            <Header />
            <Outlet />  
            <Footer />    
        </section>
    )   
};

export default App;

