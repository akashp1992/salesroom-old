import React, { useContext, useState } from "react";
import modalContext from "../ModalContext";
import Select from "react-select";
import globalContext from "../../../../context/globalContext";
import { useGetAllProductsQuery } from "../../../../store/services/dashboardServices/dashboardServices";
import { useSingleProductQuery } from "../../../../store/services/productServices/productServices";
import { useGetAllCategoriesQuery } from "../../../../store/services/categoryServices/categoryServices";
const SelectedModal = () => {
  const { setShowModal, setUploadModal } = useContext(modalContext);
  const {
    categoryId,
    setCategoryId,
    productId,
    setProductId,
    setSingleProductData,
    setSelectedProduct,
    setSelectCategory,
  } = useContext(globalContext);
  const { isLoading, isSuccess, isError, data } = useGetAllCategoriesQuery({
    businessId: "43652f2d-7324-43be-bd81-34f2af6e34a6",
  });
  const { data: getSingleProduct } = useSingleProductQuery({
    productId,
  });
  setSingleProductData(getSingleProduct);
  const [isDisabled, setIsDisabled] = useState(true);
  const { data: productData } = useGetAllProductsQuery({
    categoryId,
  });
  let allProducts;

  const handleSubmit = () => {
    setUploadModal(true);
  };
  const handleCategory = (e) => {
    setCategoryId(e.value);
    setSelectCategory(e.label);
    setSelectedProduct(null);
  };
  const handleProduct = (e) => {
    setSelectedProduct(e.label);
    setProductId(e.value);
    setIsDisabled(false);
  };
  const categories = data?.categories?.map((item, index) => ({
    value: item.categoryId,
    label: item.categoryName,
  }));

  if (productData) {
    allProducts = productData?.listProducts?.map((item, index) => ({
      value: item.productId,
      label: item.productName,
    }));
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        {/*header*/}
        <div className="flex items-start justify-center p-5">
          <h3 className="text-3xl font-semibold text-center">Select Product</h3>
        </div>
        {/*body*/}
        <div className="relative p-6 flex-auto">
          <div className="mb-5">
            <h3 className="text-gray-800 ml-3 mb-4">Select Category</h3>
            <Select
              as="select"
              className="bg-gray-50 border border-black text-gray-900 text-sm focus:outline-none block w-[400px] p-2.5"
              value={categories?.categoryName}
              onChange={(e) => handleCategory(e)}
              options={categories}
            ></Select>
          </div>
          {allProducts?.length > 0 && (
            <div>
              <h3 className="text-gray-800 ml-3 mb-4">Select Product</h3>
              <Select
                as="select"
                className="bg-gray-50 border border-black text-gray-900 text-sm focus:outline-none block w-[400px] p-2.5"
                value={allProducts.label}
                onChange={(e) => handleProduct(e)}
                options={allProducts}
              ></Select>
            </div>
          )}
        </div>
        {/*footer*/}
        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
          <button
            className="modal-cancle-btn"
            type="button"
            onClick={() => setShowModal(false)}
          >
            Cancle
          </button>
          <button
            className={`${
              !isDisabled
                ? "modal-done-btn"
                : "modal-done-btn !cursor-not-allowed"
            } `}
            type="submit"
            disabled={isDisabled}
          >
            Done
          </button>
        </div>
      </form>
    </>
  );
};

export default SelectedModal;
