import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const businessServices = createApi({
  reducerPath: "business",
  tagTypes: ["business"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://api-qa.salesroom.in/v1/",
  }),
  endpoints: (builder) => ({
    createBusiness: builder.mutation({
      query: (userInfo) => ({
        headers: { "Content-Type": "application/json" },
        url: "business",
        method: "POST",
        body: userInfo,
      }),
      invalidatesTags: ["business"],
    }),
    getBusiness: builder.query({
      query: (businessId) => ({
        url: `business/${businessId}`,
        method: "GET",
      }),
      providesTags: ["business"],
    }),
    updateBusiness: builder.mutation({
      query: ({ businessId, ...rest }) => ({
        url: `business/${businessId}`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: ["business"],
    }),
  }),
});

export const {
  useCreateBusinessMutation,
  useGetBusinessQuery,
  useUpdateBusinessMutation,
} = businessServices;
export default businessServices;
