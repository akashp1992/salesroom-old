import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const loginService = createApi({
  reducerPath: "login",
  tagTypes: ["login"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://api-qa.salesroom.in/v1/",
  }),
  endpoints: (builder) => ({
    sendVerifyOtp: builder.mutation({
      query: (sendData) => ({
        headers: { "Content-Type": "application/json" },
        url: "login/templates/send",
        method: "POST",
        body: sendData,
      }),
      invalidatesTags: ["login"],
    }),
    verifyOtpCode: builder.mutation({
      query: (otpCode) => ({
        headers: { "Content-Type": "application/json" },
        url: "login/templates/verify",
        method: "POST",
        body: otpCode,
      }),
    }),
  }),
});

export const { useSendVerifyOtpMutation, useVerifyOtpCodeMutation } =
  loginService;
export default loginService;
