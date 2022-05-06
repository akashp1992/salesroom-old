import React, { useEffect, useContext } from "react";
import { MdKeyboardArrowRight, MdAdd } from "react-icons/md";
import Breadcrumb from "../../../Breadcrumb/Breadcrumb";
import { useNavigate, Link } from "react-router-dom";
import { useGetAllProductsQuery } from "../../../../store/services/dashboardServices/dashboardServices";
import Loader from "../../../../Pages/Signup/components/Loader";
import { useParams } from "react-router-dom";
const CategoriesList = () => {
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const handleAddProduct = () => {
    navigate("/dashboard/addProduct");
  };
  const allProducts = useGetAllProductsQuery({
    categoryId,
  });
  useEffect(() => {
    allProducts.refetch();
  }, [allProducts?.data]);
  return (
    <>
      <Breadcrumb />
      <div className="flex flex-col w-full px-6 pt-7">
        <h3 className="font-bold">CPAP</h3>
        <p className="text-[18px]">
          {allProducts?.data?.listProducts?.length} product
        </p>
      </div>
      <div className="flex px-6">
        <div className="w-full">
          {/* categories tab content */}
          <div className="grid grid-cols-4 gap-7" id="link1">
            {allProducts.isLoading ? (
              <Loader />
            ) : (
              allProducts?.data?.listProducts?.map((item) => (
                <div
                  key={item.productId}
                  class="flex justify-between h-[170px] text-xl p-4 rounded-xl bg-gray-100 shadow-lg shadow-gray-500/40 font-bold font-poppins"
                >
                  <Link to={`category/${categoryId}/${item.productId}`}>
                    <h2 className="font-semibold text-[21px] uppercase">
                      {item.productName}
                    </h2>
                  </Link>
                </div>
              ))
            )}
            {/* add Product */}
            <div className="flex flex-col justify-center items-center h-[170px] text-xl p-4 rounded-xl bg-gray-100 shadow-lg shadow-gray-500/40 font-bold font-poppins uppercase">
              <h2 className="font-semibold text-[21px] text-[#908787]">
                Add Product
              </h2>
              <span
                className=" text-5xl cursor-pointer text-[#908787]"
                onClick={handleAddProduct}
              >
                <MdAdd />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoriesList;
