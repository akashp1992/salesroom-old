import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const productServices = createApi({
  reducerPath: "products",
  tagTypes: ["products"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://api-qa.salesroom.in/v1/",
  }),
  endpoints: (builder) => ({
    allProducts: builder.query({
      query: (businessInfo) => ({
        url: `products`,
        method: "GET",
        params: businessInfo,
      }),
      providesTags: ["products"],
    }),
    singleProduct: builder.query({
      query: ({productId}) => ({
        url: `products/${productId}`,
        method: "GET",
      }),
      providesTags: ["products"],
    }),
    createProduct: builder.mutation({
      query: (productInfo) => ({
        headers: { "Content-Type": "application/json" },
        url: `products`,
        method: "POST",
        body: productInfo,
      }),
      invalidatesTags: ["products"],
    }),
    updateProduct: builder.mutation({
      query: (updateProductInfo) => ({
        url: `products`,
        method: "PUT",
        body: updateProductInfo,
      }),
      invalidatesTags: ["products"],
    }),
    deleteProduct: builder.mutation({
      query: ({productId}) => ({
        url: `products/${productId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["products"],
    }),
  }),
});

export const {
  useAllProductsQuery,
  useSingleProductQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productServices;
export default productServices;
