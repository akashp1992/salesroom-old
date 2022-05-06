import React, { Fragment } from "react";
import { RiAddFill } from "react-icons/ri";
import CategoryModal from "../Common/Modals/CategoryModal/CategoryModal";
import { Provider } from "../Common/Modals/ModalContext";
import ProductModal from "../Common/Modals/ProductModal/ProductModal";
import ManualModal from "../Common/Modals/ManualModal/ManualModal";
import ImagesModal from "../Common/Modals/ImagesModal/ImagesModal";
import CataloguesModal from "../Common/Modals/Catalogues/CataloguesModal";
import CadModal from "../Common/Modals/CadModal/CadModal";
import VideosModal from "../Common/Modals/VideosModal/VideosModal";
import { Menu, Transition } from "@headlessui/react";
const Dropdown = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [dropdownItem, setDropdownItem] = React.useState("Category");
  const [modalContent, setModalContent] = React.useState(true);
  const [createNewCategory, setCreateNewCategory] = React.useState(false);
  const [createCategory, setCreateCategory] = React.useState(false);
  const [uploadModal, setUploadModal] = React.useState(false);
  // const [selectCategory, setSelectCategory,] = React.useState(null);

  const handleDropdownItem = (item) => {
    setShowModal(true);
    setDropdownItem(item);
  };
  const dropdownItems = [
    "Category",
    "Product",
    "Images",
    "Manual",
    "Catalogue",
    "CAD drawings",
    "Videos",
  ];
  return (
    <>
      <Menu as="div" className="relative">
        <div>
          <Menu.Button>
            <div
              className="text-primary py-[6px] px-4 border border-primary rounded-full text-md font-semibold flex justify-between mr-3"
            >
              <span className="text-xl font-semibold px-2">
                <RiAddFill />
              </span>
              Add
            </div>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items>
            <Menu.Item
              class={
                "origin-top-right absolute right-0 -mt-10 w-[155px] rounded-sm shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              }
              role="menu"
            >
              <div class="py-1" role="none">
                {dropdownItems.map((item, index) => (
                  <li
                    key={index}
                    class="text-gray-700 block px-4 py-2 text-sm cursor-pointer menu-hover"
                    role="menuitem"
                    tabIndex="-1"
                    onClick={() => handleDropdownItem(item)}
                  >
                    {item}
                  </li>
                ))}
              </div>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
      <Provider
        value={{
          showModal,
          setShowModal,
          dropdownItem,
          modalContent,
          setModalContent,
          createCategory,
          setCreateCategory,
          createNewCategory,
          setCreateNewCategory,
          uploadModal,
          setUploadModal,
          // selectCategory,
          // setSelectCategory,
        }}
      >
        {showModal && (
          <>
            {dropdownItem === "Category" && <CategoryModal />}
            {dropdownItem === "Product" && <ProductModal />}
            {dropdownItem === "Images" && <ImagesModal />}
            {dropdownItem === "Manual" && <ManualModal />}
            {dropdownItem === "Catalogue" && <CataloguesModal />}
            {dropdownItem === "CAD drawings" && <CadModal />}
            {dropdownItem === "Videos" && <VideosModal />}
            {createNewCategory && <CategoryModal />}
          </>
        )}
      </Provider>
    </>
  );
};

export default Dropdown;
