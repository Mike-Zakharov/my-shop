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
            <div key = {key++} className="box">
                <img src={product.image} alt='product'/>
                <Link to={productLink} className="category-item-title">{product.title}</Link>
                <ul>
                    <li>price: <strong>{product.price} $</strong></li>
                    <li>total orders: <strong>{product.rating.count}</strong></li>
                    <li>rating: <strong>{product.rating.rate}</strong> <span style={{color: 'gold'}}>&#9733;</span></li>
                </ul>
            </div>
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