import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

// Использую RTK Query для получения данных
export const fakestoreApi = createApi({
    reducerPath: 'fakestoreApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://fakestoreapi.com/products/'}),
    endpoints: (builder) => ({
        getAllCategories: builder.query({
            query: () => `/categories`
        }),
        getAllProductInCategory: builder.query({
            query: (category) => `category/${category}`
        }),
        getSingleProduct: builder.query({
            query: (id) => `/${id}`,
            providesTags: (id) => [{type: 'Product', id: id}],
            
        })    
    })
    
});

export const {useGetAllCategoriesQuery,
              useGetAllProductInCategoryQuery,
              useGetSingleProductQuery,} = fakestoreApi;


