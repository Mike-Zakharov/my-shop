import React from "react";
import { Link } from "react-router-dom";
import './main-page-component.sass';

const MainPageComponent = ({getData}) => {
    
    const {data,isLoading, error} = getData;

    if( isLoading ) {
        return <p>Loading...</p>
    }
    if( error ){
        return (
            <div>
               {error.status} {JSON.stringify(error.data)}
            </div>
        ) 
    }

    return (
        <div className="box">
            <Link to={data.category} className="link">{data.category}</Link>
            <img src={data.image} alt={data.category}/>
        </div>
    )
}

export default MainPageComponent;