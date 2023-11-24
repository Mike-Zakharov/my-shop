import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  	cart: [],
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		// метод для добавления товара в корзину
		addItemToCart: (state, action) => {
			const itemInCart = state.cart.find((item) => item.id === action.payload.id);
			if (itemInCart) {
				itemInCart.quantity++;
			} else {
				state.cart.push({ ...action.payload, quantity: 1 });
			}
		},
		// метод для удаления товара из корзины
		removeItemFromCart: (state, action) => {
			state.cart = state.cart.filter(item => item.id !== action.payload);
		},
		// метод для увеличения количества товара, находящегося в корзине
		incrementQuantity: (state, action) => {
			const item = state.cart.find((item) => item.id === action.payload);
			item.quantity++;
		},
		// метод для уменьшения количества товара, находящегося в корзине
		decrementQuantity: (state, action) => {
			const item = state.cart.find((item) => item.id === action.payload);
			if (item.quantity === 1) {
				item.quantity = 1
			} else {
				item.quantity--;
			}
		},
	},
});

export const { addItemToCart,
               removeItemFromCart,
               incrementQuantity, 
               decrementQuantity } = cartSlice.actions;

export default cartSlice.reducer;
