import React from "react";
import './app.sass'
import Header from "../header/header";
import { Outlet } from "react-router-dom";
import Footer from "../footer/footer";


const App = () => {
    
    return (
        <section>
            <Header />
            <Outlet />  
            <Footer />    
        </section>
    )   
};

export default App;

