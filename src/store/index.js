import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import loginService from "./services/loginService/loginService";
import dashboardServices from "./services/dashboardServices/dashboardServices";
import categoryServices from "./services/categoryServices/categoryServices";
import productServices from "./services/productServices/productServices";
import businessReducer from "./reducers/businessReducer"
import userServices from "./services/userServices/userServices";
import documentServices from "./services/documentServices/documentServices";
const Store = configureStore({
  reducer: {
    [loginService.reducerPath]: loginService.reducer,
    [dashboardServices.reducerPath]: dashboardServices.reducer,
    [categoryServices.reducerPath]: categoryServices.reducer,
    [productServices.reducerPath]: productServices.reducer,
    [userServices.reducerPath]: userServices.reducer,
    [documentServices.reducerPath]: documentServices.reducer,
    businessInfo: businessReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      loginService.middleware,
      dashboardServices.middleware,
      categoryServices.middleware,
      productServices.middleware,
      userServices.middleware,
      documentServices.middleware
    ]),
});
export default Store;
