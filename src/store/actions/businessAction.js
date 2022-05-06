import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const createBusiness = createAsyncThunk(
  "createBusiness",
  async (businessInfo) => {
    const response = await axios.post(
      `http://api-qa.salesroom.in/v1/business`,
      businessInfo
    );
    return response.data;
  }
);
