import React, { useContext } from "react";
import tabDropdownContext from "../../TabDropdown/TabDropdownContext";
import InfoModalContent from "./InfoModalContent";
const InfoModal = () => {
  const { showModal } = useContext(tabDropdownContext);
  return (
    <>
      {showModal && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none !normal-case">
            <div className="relative w-[60vw] my-6 mx-auto">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <InfoModalContent />
              </div>
            </div>
          </div>
          <div className={`opacity-25 fixed inset-0 z-40 bg-black`}></div>
        </>
      )}
    </>
  );
};

export default InfoModal;
