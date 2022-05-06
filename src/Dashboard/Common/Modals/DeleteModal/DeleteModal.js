import React, { useContext } from "react";
import tabDropdownContext from "../../TabDropdown/TabDropdownContext";
const DeleteModal = ({uuId}) => {
  const { showModal } = useContext(tabDropdownContext);
  return (
    <>
      {showModal && (
        <>
          
        </>
      )}
    </>
  );
};

export default DeleteModal;
