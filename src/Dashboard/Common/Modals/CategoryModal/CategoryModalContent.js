import React, { useState, useContext } from "react";
import Swal from "sweetalert2";
import { useCreateCategoryMutation } from "../../../../store/services/categoryServices/categoryServices";
import modalContext from "../../Modals/ModalContext";
const CategoryModalContent = ({ setAddCategory, addCategory }) => {
  const { showModal, setShowModal, setCreateCategory, setCreateNewCategory } =
    useContext(modalContext);
  const [cateName, setCateName] = useState("");
  const [createCategory, result] = useCreateCategoryMutation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const cateInfo = {
      businessId: "43652f2d-7324-43be-bd81-34f2af6e34a6",
      categoryName: cateName,
    };
    if (showModal) {
      await createCategory(cateInfo);
    }
    if (addCategory) {
      await createCategory(cateInfo);
    }
  };

  if (showModal) {
    if (result.isSuccess) {
      setCreateCategory(false);
      setCreateNewCategory(false);
      setShowModal(false);
      Swal.fire({
        title: "Category Created",
        icon: "success",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  }

  if (addCategory) {
    if (result.isSuccess) {
      setAddCategory(false);
      Swal.fire({
        title: "Category Created",
        icon: "success",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  }

  const handleCencle = () => {
    if (showModal) {
      setShowModal(false);
      setCreateNewCategory(false);
    }
    if (addCategory) {
      setAddCategory(false);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      {/*header*/}
      <div className="flex items-start justify-center p-5">
        <h3 className="text-3xl font-semibold text-center">Add Category</h3>
      </div>
      {/*body*/}
      <div className="relative p-6 flex-auto">
        <div>
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Enter Category Name
          </label>
          <input
            type="text"
            name="category"
            onChange={(e) => setCateName(e.target.value)}
            className="bg-gray-50 border border-black text-gray-900 text-sm focus:outline-none block w-[400px] p-2.5"
            required
          />
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

export default CategoryModalContent;
