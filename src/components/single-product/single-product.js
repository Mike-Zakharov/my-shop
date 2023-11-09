import React from "react";
import { useGetSingleProductQuery } from "../../services/fakestoreapi";
import { useParams } from "react-router-dom";
import './single-product.sass'

const SingleProduct = () => {
    const {id} = useParams();
    const {data:product,isLoading, error} = useGetSingleProductQuery(id);

    if(isLoading) {
        return <p>Loading...</p>
    }
    
    if(error) {
        return <p>Error</p>
    }

    return (
        <ul className="single-product">
            <li>{product.id}</li>
            <li>{product.title}</li>
            <li>{product.category}</li>
            <li>{product.description}</li>
            <li>{product.price}</li>
            <li>{product.rating.count}</li>
            <li>{product.rating.rate}</li>
            <img src={product.image} alt={product.title}/>
        </ul>
    )
}

export default SingleProduct;