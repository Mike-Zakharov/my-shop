import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetAllProductInCategoryQuery } from "../../services/fakestoreapi";
import './category.sass'

const Category = () => {
    const {category} = useParams();
    const { data:categoryId, isLoading, error } = useGetAllProductInCategoryQuery(category);
    
    if(isLoading) {
        return <p>Loading...</p>
    }
    
    if(error){
        return <p>Error: {error.status}</p>
    }

    let key = 100;
    const product = categoryId.map((product) => {

        const productLink = `/products/${product.id}`;

        return (
            <>
                <div key = {key++} className="box">
                    <ul>
                        <li>{product.id}</li>
                        <li><Link to={productLink}>{product.title}</Link></li>
                        <li>{product.category}</li>
                        <li>{product.price}$</li>
                        <li>{product.rating.count}</li>
                        <li>{product.rating.rate}</li>
                    </ul>
                    <img src={product.image} alt='product'/>
                </div>
            </>
        )
    });

    return (
        <>
            <h2 className="category-title">{category.toUpperCase()}</h2>
            <div className="container">
                {product}
            </div>
        </>
    )
    
}

export default Category;