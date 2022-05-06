import React, { useContext, useState, useEffect } from "react";
import tabDropdownContext from "../../TabDropdown/TabDropdownContext";
import Swal from "sweetalert2";
import { useUpdateCategoryMutation } from "../../../../store/services/categoryServices/categoryServices";
import { useGetAllCategoriesQuery } from "../../../../store/services/categoryServices/categoryServices";
import { useUpdateProductMutation } from "../../../../store/services/productServices/productServices";

const RenameModalContent = ({ item }) => {
  const { setShowModal, setRename } = useContext(tabDropdownContext);
  const [renameValue, setRenameValue] = useState(null);
  const [updateCategory, result] = useUpdateCategoryMutation();
  const [updateProduct, updateResult] = useUpdateProductMutation();
  const getAllCagtegories = useGetAllCategoriesQuery({
    businessId: "43652f2d-7324-43be-bd81-34f2af6e34a6",
  });
  const categoryUpdateInfo = {
    categoryId: item.categoryId,
    categoryName: renameValue,
  };
  const productUpdateInfo = {
    businessId: item.businessId,
    categoryId: item.categoryId,
    productId: item.id,
    productName: renameValue,
    productUniqueId: "123456",
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setRename(false);
    if (item.id) {
      await updateProduct(productUpdateInfo);
    } else {
      await updateCategory(categoryUpdateInfo);
      getAllCagtegories.refetch();
    }
    setShowModal(false);
    Swal.fire({
      title: "Name Updated Successful",
      icon: "success",
      showConfirmButton: false,
      timer: 2000,
    });
  };
  const handleCencle = () => {
    setRename(false);
    setShowModal(false);
  };
  return (
    <form onSubmit={handleSubmit}>
      {/*header*/}
      <div className="flex items-start justify-start p-5">
        <h3 className="text-3xl font-semibold text-left">Rename</h3>
      </div>
      {/*body*/}
      <div className="relative p-6 flex-auto">
        <div>
          <input
            type="text"
            name="category"
            defaultValue={item?.categoryName || item?.productName}
            onChange={(e) => setRenameValue(e.target.value)}
            className="bg-gray-50 border border-black text-gray-900 text-sm focus:outline-none block w-[400px] p-2.5"
          />
        </div>
      </div>
      {/*footer*/}
      <div className="flex items-center justify-end p-6 rounded-b">
        <button
          className="modal-cancle-btn"
          type="button"
          onClick={handleCencle}
        >
          Cancle
        </button>
        <button className="modal-done-btn" type="submit">
          Save
        </button>
      </div>
    </form>
  );
};

export default RenameModalContent;
