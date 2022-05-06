import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { MdModeEdit, MdFileDownload, MdDelete } from "react-icons/md";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { Provider } from "./TabDropdownContext";
import RenameModal from "../Modals/RenameModal/RenameModal";
import InfoModal from "../Modals/InfoModal/InfoModal";
import Swal from "sweetalert2";
import { useDeleteCategoryMutation } from "../../../store/services/categoryServices/categoryServices";
import { useDeleteProductMutation } from "../../../store/services/productServices/productServices";
export default function TabDropdown({ item }) {
  const [rename, setRename] = useState(false);
  const [info, setInfo] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [deleteCategory] = useDeleteCategoryMutation();
  const [deleteProduct, result] = useDeleteProductMutation();
  const handleRename = () => {
    setShowModal(true);
    setRename(true);
  };
  const handleInfo = () => {
    setShowModal(true);
    setInfo(true);
  };
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
    }).then(async (result) => {
      if (result.isConfirmed) {
        if (item.id || item.productId) {
          console.log("item.id", item.id, "item.productId", item.productId);
          await deleteProduct({ productId: item.id });
          Swal.fire("Deleted!", "Deleted successfully complete.", "success");
        } else {
          await deleteCategory({ categoryId: item.categoryId });
          Swal.fire("Deleted!", "Deleted successfully complete.", "success");
        }
      }
    });
  };
  return (
    <>
      <Menu as="div" className="relative inline-block text-left z-10">
        <div>
          <Menu.Button>
            <span className="text-3xl cursor-pointer text-fontColor">
              <span>
                <BiDotsVerticalRounded />
              </span>
            </span>
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
          <Menu.Items className="absolute right-0 w-52 origin-top-right bg-white shadow-lg">
            <div className="px-1 py-2 text-fontColor">
              <Menu.Item>
                <button
                  className={`flex rounded-md items-center w-full px-2 py-1 text-fontColor hover:text-primary text-[16px]`}
                  onClick={handleRename}
                >
                  <span className="text-lg mr-2 text-fontColor hover:text-primary">
                    <MdModeEdit />
                  </span>
                  Rename
                </button>
              </Menu.Item>
              <Menu.Item>
                <button
                  className={`flex rounded-md items-center w-full px-2 py-1 text-fontColor hover:text-primary text-[16px]`}
                >
                  <span className="text-lg mr-2 text-fontColor hover:text-primary">
                    <MdFileDownload />
                  </span>
                  Download
                </button>
              </Menu.Item>
              <Menu.Item>
                <button
                  className={`flex rounded-md items-center w-full px-2 py-1 text-fontColor hover:text-primary text-[16px]`}
                  onClick={handleInfo}
                >
                  <span className="text-lg mr-2 text-fontColor hover:text-primary">
                    <AiOutlineInfoCircle />
                  </span>
                  Info
                </button>
              </Menu.Item>
              <Menu.Item>
                <button
                  className={`flex rounded-md items-center w-full px-2 py-1 text-fontColor hover:text-primary text-[16px]`}
                  onClick={handleDelete}
                >
                  <span className="text-lg mr-2 text-fontColor hover:text-primary">
                    <MdDelete />
                  </span>
                  Delete
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      <Provider
        value={{
          showModal,
          setShowModal,
          rename,
          setRename,
          info,
          setInfo,
        }}
      >
        {showModal && (
          <>
            {rename && <RenameModal item={item} />}
            {info && <InfoModal item={item} />}
          </>
        )}
      </Provider>
    </>
  );
}
