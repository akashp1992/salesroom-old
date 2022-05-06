import React, { useContext } from "react";
import CategoryModalContent from "./CategoryModalContent";
import modalContext from "../../Modals/ModalContext";
export default function CategoryModal({ addCategory, setAddCategory }) {
  const { showModal, createNewCategory } = useContext(modalContext);
  return (
    <>
      {showModal && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <CategoryModalContent />
              </div>
            </div>
          </div>
          <div
            className={`${
              createNewCategory
                ? "opacity-0 fixed inset-0 z-40 bg-black"
                : "opacity-25 fixed inset-0 z-40 bg-black"
            }`}
          ></div>
        </>
      )}

      {addCategory && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-xl">
              content
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <CategoryModalContent
                  setAddCategory={setAddCategory}
                  addCategory={addCategory}
                />
              </div>
            </div>
          </div>
          <div
            className={`${
              createNewCategory
                ? "opacity-0 fixed inset-0 z-40 bg-black"
                : "opacity-25 fixed inset-0 z-40 bg-black"
            }`}
          ></div>
        </>
      )}
    </>
  );
}
