import React from "react";
import './cart-item.sass';
import { useDispatch } from "react-redux";
import { removeItemFromCart, incrementQuantity, decrementQuantity } from "../../store/cart-slice";
import { Link } from "react-router-dom";


const CartItem =({id, category, description, rating, image, title, price, quantity=0}) => {
	const dispatch = useDispatch();

	const handleRemoveItemFromCart = (id) => {
		dispatch(removeItemFromCart(id));
	}

	return (
		<div className="cart-item">
			<img src={image} alt={title}/>
			<div className="cart-item_descr">
				<h3><span>{title}</span></h3>
				<ul className="descr-list">
					<li>{description}</li>
					<li>category: <span>{category}</span></li>
					<li>price: <span>{price} $</span></li>
					<li>total orders: <span>{rating.count}</span></li>
					<li>rating: <span>{rating.rate}</span> <span style={{color: 'gold'}}>&#9733;</span></li>
				</ul>
				<div className="cart_btns">
					<div className="btn-wrapper">
						<button 
						onClick={() => dispatch(decrementQuantity(id))}
						className="btn btn_small">
							−
						</button>
						<p><span>{quantity}</span></p>
						<button 
						onClick={() => dispatch(incrementQuantity(id))}
						className="btn btn_small">
							+
						</button>
						<button className='btn btn_medium btn_remove' 
						onClick={() => handleRemoveItemFromCart(id)}>
							Remove
						</button>
					</div>
					<div>
						<Link to='/thanks-page' className="link">
							<button className="btn btn_medium">BUY</button>
						</Link>	
					</div>					
				</div>
			</div>
		</div>
	)
}
  
export default CartItem;
