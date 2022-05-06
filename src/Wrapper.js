import React, { useState } from "react";
import { Provider } from "./context/globalContext";

const Wrapper = ({ children }) => {
  const [businessData, setBusinessData] = useState(null);
  const [usersData, setUsersData] = useState(null);
  const [categoryId, setCategoryId] = useState(null);
  const [productId, setProductId] = useState(null);
  const [singleProductData, setSingleProductData] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectCategory, setSelectCategory] = useState(null);
  const [productName, setProductName] = useState(null);
  const [productData, setProductData] = useState(null);
  const [cadDesignS3Urls, setCadDesignS3Urls] = useState([]);
  const [manualS3Urls, setManualS3Urls] = useState([]);
  const [imageS3Urls, setImageS3Urls] = useState([]);
  const [customLinks, setCustomLinks] = useState([]);
  const [catalogUrls, setCatalogUrls] = useState([]);
  const [videoUrls, setVideoUrls] = useState([]);
  const [offset, setOffset] = useState(0);
  return (
    <Provider
      value={{
        businessData,
        setBusinessData,
        usersData,
        setUsersData,
        categoryId,
        setCategoryId,
        productId,
        setProductId,
        singleProductData,
        setSingleProductData,
        selectedProduct,
        setSelectedProduct,
        selectCategory,
        setSelectCategory,
        productName,
        setProductName,
        productData,
        setProductData,
        manualS3Urls,
        setManualS3Urls,
        imageS3Urls,
        setImageS3Urls,
        cadDesignS3Urls,
        setCadDesignS3Urls,
        customLinks,
        setCustomLinks,
        offset,
        setOffset,
        catalogUrls,
        setCatalogUrls,
        videoUrls,
        setVideoUrls,
      }}
    >
      {children}
    </Provider>
  );
};

export default Wrapper;
