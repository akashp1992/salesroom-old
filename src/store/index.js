import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import loginService from "./services/loginService/loginService";
import dashboardServices from "./services/dashboardServices/dashboardServices";
import categoryServices from "./services/categoryServices/categoryServices";
import productServices from "./services/productServices/productServices";
import businessReducer from "./reducers/businessReducer"
const Store = configureStore({
  reducer: {
    [loginService.reducerPath]: loginService.reducer,
    [dashboardServices.reducerPath]: dashboardServices.reducer,
    [categoryServices.reducerPath]: categoryServices.reducer,
    [productServices.reducerPath]: productServices.reducer,
    businessInfo:businessReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      loginService.middleware,
      dashboardServices.middleware,
      categoryServices.middleware,
      productServices.middleware,
    ]),
});
export default Store;
