import React from "react";
import './header.sass';
import { useGetAllCategoriesQuery } from "../../services/fakestoreapi";
import { Link } from "react-router-dom";

const Header = () => {
    const {data, isLoading, error} = useGetAllCategoriesQuery();
    if( isLoading ) {
        return <p>Loading...</p>
    }
    if( error ){
        return <p>Error</p>
    }

    const category = data.map((item) => {
        return <Link to={item} className="nav-link">{item}</Link>
    })

    return (
        <div className="header">
            <div>
                <Link to='/' className="nav-link"><strong>My Shop</strong></Link>
                {category}
            </div>
            <div>
                <Link className="nav-link">Cart</Link>
                <Link className="nav-link">Contacts</Link>
            </div>
        </div>
    )
}

export default Header;