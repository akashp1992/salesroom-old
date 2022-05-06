import React, { useContext } from "react";
import modalContext from "../../Modals/ModalContext";
import ProductModalContent from "./ProductModalContent";
import ProductNameModalContent from "./ProductNameModalContent";

export default function ProductModal() {
  const { showModal, modalContent } = useContext(modalContext);
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {modalContent ? (
                  <ProductModalContent />
                ) : (
                  <ProductNameModalContent />
                )}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
