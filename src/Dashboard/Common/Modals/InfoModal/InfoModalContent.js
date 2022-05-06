import React, { useContext } from "react";
import tabDropdownContext from "../../TabDropdown/TabDropdownContext";
const InfoModalContent = () => {
  const { setShowModal, setInfo } = useContext(tabDropdownContext);
  const handleCencle = () => {
    setInfo(false);
    setShowModal(false);
  };
  return (
    <>
      {/*header*/}
      <div className="flex flex-col items-start justify-start p-[60px]">
        <h3 className="text-3xl font-semibold text-left text-titleColor">
          Details
        </h3>
        <h4>Who has access</h4>
        <div className="flex items-center justify-center gap-3">
          <img className="w-10" src={require("../../../../Assets/images/icon/lock.png")} />
          <h2 className="text-fontColor text-lg mt-3">Not Shared</h2>
        </div>
      </div>
      {/*body*/}
      <div className="relative flex-auto p-[60px] pt-0">
        <h2 className="text-titleColor">Properties</h2>
        <div className="flex items-center justify-between">
          <h2 className="text-fontColor text-[16px] basis-1/2">Type</h2>
          <h2 className="text-titleColor text-[16px] basis-1/2">Category</h2>
        </div>
        <div className="flex items-center justify-between">
          <h2 className="text-fontColor text-[16px] basis-1/2">Created</h2>
          <h2 className="text-titleColor text-[16px] basis-1/2">
            7 Feb 2022 with forms-file-upload
          </h2>
        </div>
        <div className="flex items-center justify-between">
          <h2 className="text-fontColor text-[16px] basis-1/2">Modified</h2>
          <h2 className="text-titleColor text-[16px] basis-1/2">
            7 Feb 2022 by Niranjan Naragund
          </h2>
        </div>
      </div>
      {/*footer*/}
      <div className="flex items-center justify-end rounded-b p-[60px] pt-0">
        <button
          className="modal-cancle-btn"
          type="button"
          onClick={handleCencle}
        >
          Cencle
        </button>
      </div>
    </>
  );
};

export default InfoModalContent;
