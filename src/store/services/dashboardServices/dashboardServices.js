import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  baseUrl,
  getAllDashboardProductsApi,
} from "../../../constants/constants";

const dashboardServices = createApi({
  reducerPath: "dashboard",
  tagTypes: ["dashboard", "category"],
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  endpoints: (builder) => ({
    getAllDashboardProducts: builder.query({
      query: ({ businessId, filterBy }) => ({
        url: getAllDashboardProductsApi,
        method: "GET",
        params: { businessId, filterBy },
      }),
      providesTags: ["dashboard"],
    }),
    getAllProducts: builder.query({
      query: ({ categoryId }) => ({
        url: `v1/dashboard/categories/${categoryId}/products`,
        method: "GET",
      }),
      providesTags: ["dashboard"],
    }),
  }),
});

export const { useGetAllDashboardProductsQuery, useGetAllProductsQuery } =
  dashboardServices;
export default dashboardServices;
