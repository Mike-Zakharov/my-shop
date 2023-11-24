import { configureStore } from "@reduxjs/toolkit";
import { fakestoreApi } from "../services/fakestoreapi";
import cartReducer from './cart-slice';
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({ 
    reducer: {
        [fakestoreApi.reducerPath]: fakestoreApi.reducer,
        cart: cartReducer
    },
    middleware: (getDefaultMiddleweare) => getDefaultMiddleweare().concat(fakestoreApi.middleware) 
    
});

setupListeners(store.dispatch);