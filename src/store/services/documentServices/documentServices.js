import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const documentServices = createApi({
  reducerPath: "document",
  tagTypes: ["document"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://api-qa.salesroom.in/v1/",
  }),
  endpoints: (builder) => ({
    uploadDocument: builder.mutation({
      query: (...uploadFile) => ({
        url: `documents/upload?businessId=43652f2d-7324-43be-bd81-34f2af6e34a6&category=CATEGORY`,
        method: "POST",
        body: uploadFile,
      }),
      invalidatesTags: ["document"],
    }),
  }),
});

export const { useUploadDocumentMutation } = documentServices;
export default documentServices;
