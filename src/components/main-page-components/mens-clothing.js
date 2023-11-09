import React from "react";
import { useGetSingleProductQuery } from "../../services/fakestoreapi";
import { Link } from "react-router-dom";
import './main-page-components.sass';

const MensClothing = () => {
     // Получаем отдельный конкретный товар для отображения Категории с картинкой
    const id = 2;
    const {data,isLoading, error} = useGetSingleProductQuery(id);

    if( isLoading ) {
        return <p>Loading...</p>
    }
    if( error ){
        return <p>Error</p>
    }

    
    return (
        <div className="box">
            <Link to={data.category} className="link">{data.category}</Link>
            <img src={data.image} alt={data.category}/>
        </div>
    )
}

export default MensClothing;