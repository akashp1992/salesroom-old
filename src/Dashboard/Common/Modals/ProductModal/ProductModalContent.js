import React, { useContext, useState } from "react";
import modalContext from "../../Modals/ModalContext";
import { useGetAllCategoriesQuery } from "../../../../store/services/categoryServices/categoryServices";
import globalContext from "../../../../context/globalContext";
import Select from "react-select";
const ProductModalContent = () => {
  const { setShowModal, setModalContent, setCreateNewCategory } =
    useContext(modalContext);
  const { setSelectCategory, categoryId, setCategoryId } =
    useContext(globalContext);
  const handleCreateCategory = () => {
    setCreateNewCategory(true);
  };
  const { isLoading, isSuccess, isError, data } = useGetAllCategoriesQuery({
    businessId: "43652f2d-7324-43be-bd81-34f2af6e34a6",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setModalContent(false);
  };
  const handleCencle = () => {
    setShowModal(false);
  };
  const handleCategory = (e) => {
    setSelectCategory(e.label);
    setCategoryId(e.value);
  };
  const categories = data?.categories?.map((item, index) => ({
    value: item.categoryId,
    label: item.categoryName,
  }));
  return (
    <form onSubmit={handleSubmit}>
      {/*header*/}
      <div className="flex items-start justify-center p-5">
        <h3 className="text-3xl font-semibold text-center">Select Category</h3>
      </div>
      {/*body*/}
      <div className="relative p-6 flex-auto">
        <div>
          <Select
            as="select"
            className="bg-gray-50 border border-black text-gray-900 text-sm focus:outline-none block w-[400px] p-2.5 mb-3"
            value={categories?.label}
            onChange={(e) => handleCategory(e)}
            options={categories}
          ></Select>
          <span
            className="text-primary font-semibold cursor-pointer"
            onClick={handleCreateCategory}
          >
            Create new category
          </span>
        </div>
      </div>
      {/*footer*/}
      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
        <button
          className="modal-cancle-btn"
          type="button"
          onClick={handleCencle}
        >
          Cancle
        </button>
        <button className="modal-done-btn" type="submit">
          Done
        </button>
      </div>
    </form>
  );
};

export default ProductModalContent;
