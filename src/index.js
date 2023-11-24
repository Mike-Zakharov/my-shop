import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.sass';
import App from './components/app';
import reportWebVitals from './reportWebVitals';
import {
	createBrowserRouter,
	RouterProvider
	} from "react-router-dom";
import Category from './components/category/category';
import { Provider } from 'react-redux';
import {store} from './store/store';
import SingleProduct from './components/single-product/single-product';
import MainPage from './components/main-page';
import CartComponent from './components/cart';


const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <MainPage />
			},
			{
				path: "/:category",
				element: <Category />,  
			},
			{
				path: "/products/:id",
				element: <SingleProduct />,
			},
			{
				path: "/cart",
				element: <CartComponent/>
			}
		]  
	}  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<Provider store = { store }>
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>
	</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
