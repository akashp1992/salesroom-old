import React, { useContext } from "react";
import modalContext from "../../Modals/ModalContext";
import globalContext from "../../../../context/globalContext";
import { useNavigate } from "react-router-dom";
const ProductNameModalContent = () => {
  const { setShowModal, setModalContent } = useContext(modalContext);
  const { setProductName } = useContext(globalContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setModalContent(true);
    setShowModal(false);
    navigate("/dashboard/addProduct");
  };
  const handleCencle = () => {
    setModalContent(true);
    setShowModal(false);
  };
  return (
    <form onSubmit={handleSubmit}>
      {/*header*/}
      <div className="flex items-start justify-center p-5">
        <h3 className="text-3xl font-semibold text-center">
          Enter Product Name
        </h3>
      </div>
      {/*body*/}
      <div className="relative p-6 flex-auto">
        <div>
          <input
            type="text"
            name="productName"
            onChange={(e) => setProductName(e.target.value)}
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
        <button type="submit" role="button" className="modal-done-btn">
          Done
        </button>
      </div>
    </form>
  );
};

export default ProductNameModalContent;
