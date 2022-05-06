import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userService = createApi({
  reducerPath: "users",
  tagTypes: ["users"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://api-qa.salesroom.in/v1/",
  }),
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: (businessId) => ({
        url: `users/business/`,
        method: "GET",
        params: businessId,
      }),
      providesTags: ["users"],
    }),
    getUserById: builder.query({
      query: (userId) => ({
        url: `users`,
        method: "GET",
        params: userId,
      }),
      providesTags: ["users"],
    }),
    createUser: builder.mutation({
      query: (userInfo) => ({
        url: "users",
        method: "POST",
        body: userInfo,
      }),
      invalidatesTags: ["users"],
    }),
    updateUser: builder.mutation({
      query: (updateUsernfo) => ({
        url: "users",
        method: "PUT",
        body: updateUsernfo,
      }),
      invalidatesTags: ["users"],
    }),
    resetPassword: builder.mutation({
      query: (passwordInfo) => ({
        url: "users/resetPassword",
        method: "POST",
        body: passwordInfo,
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetUserByIdQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useResetPasswordMutation,
} = userService;

export default userService;
