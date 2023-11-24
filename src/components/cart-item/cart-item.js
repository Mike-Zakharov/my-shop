import React from "react";
import './cart-item.sass';
import { useDispatch } from "react-redux";
import { removeItemFromCart, incrementQuantity, decrementQuantity } from "../../store/cart-slice";


const CartItem =({id, category, description, rating, image, title, price, quantity=0}) => {
	const dispatch = useDispatch();

	const handleRemoveItemFromCart = (id) => {
		dispatch(removeItemFromCart(id));
	}

	return (
		<div className="cart-item">
			<img src={image} alt={title}/>
			<div className="cart-item_descr">
				<h3><strong>{title}</strong></h3>
				<ul className="descr-list">
					<li>{description}</li>
					<li>category: <strong>{category}</strong></li>
					<li>price: <strong>{price} $</strong></li>
					<li>total orders: <strong>{rating.count}</strong></li>
					<li>rating: <strong>{rating.rate}</strong> <span style={{color: 'gold'}}>&#9733;</span></li>
				</ul>
				<div className="cart_btns">
					<div className="btn-wrapper">
						<button 
						onClick={() => dispatch(decrementQuantity(id))}
						className="btn btn_small">
							-
						</button>
						<p><strong>{quantity}</strong></p>
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
				</div>
			</div>
		</div>
	)
}
  
export default CartItem;
