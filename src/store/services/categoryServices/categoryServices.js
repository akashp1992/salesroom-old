import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const categoryServices = createApi({
  reducerPath: "category",
  tagTypes: ["category"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://api-qa.salesroom.in/v1/",
  }),
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: (businessId) => ({
        url: `dashboard/categories`,
        method: "GET",
        params: businessId,
      }),
      providesTags: ["category"],
    }),
    createCategory: builder.mutation({
      query: (categoryInfo) => ({
        headers: { "Content-Type": "application/json" },
        url: "category",
        method: "POST",
        body: categoryInfo,
      }),
      invalidatesTags: ["category"],
    }),
    updateCategory: builder.mutation({
      query: (categoryUpdateInfo) => ({
        url: `category`,
        method: "PUT",
        body: categoryUpdateInfo,
      }),
      invalidatesTags: ["category"],
    }),
    deleteCategory: builder.mutation({
      query: ({categoryId}) => ({
        url: `category/${categoryId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["category"],
    }),
  }),
});

export const {
  useGetAllCategoriesQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = categoryServices;
export default categoryServices;
