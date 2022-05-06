import React, { useContext, useState, useEffect } from "react";
import { MdKeyboardArrowRight, MdAdd } from "react-icons/md";
import { useNavigate, Link } from "react-router-dom";
import TabDropdown from "../../../Common/TabDropdown/TabDropdown";
import { useGetAllCategoriesQuery } from "../../../../store/services/categoryServices/categoryServices";
import { useAllProductsQuery } from "../../../../store/services/productServices/productServices";
import globalContext from "../../../../context/globalContext";
import CategoryModal from "../../../Common/Modals/CategoryModal/CategoryModal";
import Pagination from "@mui/material/Pagination";

import Loader from "../../../../Pages/Signup/components/Loader";
const Tabs = () => {
  const [openTab, setOpenTab] = useState("Categories");
  const [addCategory, setAddCategory] = useState(false);
  const { offset, setOffset } = useContext(globalContext);

  // get all products
  const { data, isLoading, isSuccess } = useAllProductsQuery({
    businessId: "43652f2d-7324-43be-bd81-34f2af6e34a6",
    offset,
  });

  // get all categories
  const getAllCagtegories = useGetAllCategoriesQuery({
    businessId: "43652f2d-7324-43be-bd81-34f2af6e34a6",
  });
  const navigate = useNavigate();
  const handleCategory = (categoryId) => {
    navigate(`/dashboard/category/${categoryId}`);
  };
  const handleAddCategory = () => {
    setAddCategory(true);
  };
  return (
    <>
      <div className="flex">
        <div className="w-full">
          <ul
            className="tabs-btn flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            {/* categories tab */}
            <li className="-mb-px mr-2 last:mr-0 text-center">
              <a
                className={
                  openTab === "Categories"
                    ? "tab-design !font-[500] active "
                    : "tab-design !font-[500]"
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab("Categories");
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Categories
              </a>
            </li>
            {/* all products tab */}
            <li className="-mb-px mr-2 last:mr-0 text-center">
              <a
                className={
                  openTab === "products"
                    ? "tab-design !font-[500] active"
                    : "tab-design !font-[500]"
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab("products");
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                All Products
              </a>
            </li>
          </ul>
          {/* categories tab content */}
          <div
            className={
              openTab === "Categories"
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6"
                : "hidden"
            }
            id="link1"
          >
            {getAllCagtegories?.isLoading ? (
              <Loader />
            ) : (
              getAllCagtegories?.data?.categories
                .map((item, index) => (
                  <div
                    key={index}
                    class="flex flex-col justify-between text-xl h-40 p-3 rounded-xl bg-gray-100 shadow-lg shadow-gray-500/40 font-semibold font-poppins"
                  >
                    <div className="flex justify-between">
                      <h2 className="uppercase">{item.categoryName}</h2>
                      <span>
                        <TabDropdown item={item} />
                      </span>
                    </div>
                    <div className="flex self-end">
                      <span className="ml-auto text-5xl cursor-pointer relative -right-2">
                        <span onClick={() => handleCategory(item.categoryId)}>
                          <MdKeyboardArrowRight />
                        </span>
                      </span>
                    </div>
                  </div>
                ))
                .reverse()
            )}
            {/* add Category */}
            {getAllCagtegories?.isSuccess && (
              <div class="flex flex-col justify-between text-xl h-40 p-3 rounded-xl bg-gray-100 shadow-lg shadow-gray-500/40 font-bold font-poppins">
                <div className="flex justify-between">
                  <h2 className="uppercase">Add Category</h2>
                </div>
                <div className="flex self-end">
                  <span className="ml-auto text-5xl cursor-pointer relative -right-2">
                    <span onClick={() => handleAddCategory()}>
                      <MdAdd />
                    </span>
                  </span>
                </div>
              </div>
            )}
          </div>
          {/* all products tab content */}
          <div>
            <div
              className={
                openTab === "products"
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6"
                  : "hidden"
              }
              id="link1"
            >
              {isLoading ? (
                <Loader />
              ) : (
                data?.content
                  ?.map((product, index) => (
                    <div
                      key={index}
                      class="flex justify-between text-xl h-40 p-3 rounded-xl bg-gray-100 shadow-lg shadow-gray-500/40 font-bold font-poppins"
                    >
                      <Link to={`updateProduct/${product.id}`}>
                        <h2>{product.productName}</h2>
                      </Link>
                      <TabDropdown item={product} />
                    </div>
                  ))
                  .reverse()
              )}
              <div className="my-5 col-span-4 mx-auto">
                <Pagination
                  defaultPage={offset + 1}
                  count={data?.totalPages}
                  color="primary"
                  onChange={(event, value) => setOffset(value - 1)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {addCategory && (
        <CategoryModal
          setAddCategory={setAddCategory}
          addCategory={addCategory}
        />
      )}
    </>
  );
};

export default Tabs;
