import React from "react";
import { useGetSingleProductQuery } from "../../services/fakestoreapi";
import { useParams } from "react-router-dom";
import './single-product.sass'
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../store/cart-slice';

const SingleProduct = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const {data:product,isLoading, error} = useGetSingleProductQuery(id);

    if(isLoading) {
        return <p>Loading...</p>
    }
    
    if(error) {
        return <p>Error</p>
    }

    const handleAddToCart = () => {
        // Записываю в стейт весь продукт целиком, т.к. 
        // fakestoreapi.com не имеет возможности добавлять данные на сервер.
        // В случае с реальным сервером всё будет строиться через запросы к серверу
        dispatch(addItemToCart({ ...product, quantity: 1 }));
    };

    return (
        <div className="single-product">
            <img src={product.image} alt={product.title}/>
            <div className="single-product_descr" >
                <h3>{product.title}</h3>
                <ul className="descr-list">
                    <li>{product.description}</li>
                    <li>category: <span>{product.category}</span></li>
                    <li>price: <span>{product.price} $</span></li>
                    <li>total orders: <span>{product.rating.count}</span></li>
                    <li>rating: <span>{product.rating.rate}</span> <span style={{color: 'gold'}}>&#9733;</span></li>
                </ul>
                <div className="single-product_btn-wrapper">
                    <button onClick={handleAddToCart} className="btn btn_medium">
                        Add to Cart
                    </button>
                </div>                
            </div>
        </div>
    )
}

export default SingleProduct;