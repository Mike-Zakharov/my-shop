import { configureStore } from "@reduxjs/toolkit";
import { fakestoreApi } from "../services/fakestoreapi";

export const store = configureStore({ 
    reducer: {
        [fakestoreApi.reducerPath]: fakestoreApi.reducer
    },
    middleware: (getDefaultMiddleweare) => getDefaultMiddleweare().concat(fakestoreApi.middleware) 
    
});