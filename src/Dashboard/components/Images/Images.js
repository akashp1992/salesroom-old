import React, { useState } from "react";
import Breadcrumb from "../../Breadcrumb/Breadcrumb";
import { useGetAllDashboardProductsQuery } from "../../../store/services/dashboardServices/dashboardServices";
import { MdArrowRight, MdArrowDropDown, MdAddCircle } from "react-icons/md";
import Loader from "../../../Pages/Signup/components/Loader";
import ImageModal from "./imageModal/ImageModal";
const Images = () => {
  const { data, isLoading } = useGetAllDashboardProductsQuery({
    businessId: "43652f2d-7324-43be-bd81-34f2af6e34a6",
    filterBy: "IMAGES",
  });
  const [productID, setProductID] = useState(null);
  const [clickedImg, setClickedImg] = useState(false);
  const [allImages, setAllImages] = useState([]);
  const handleOpen = (productId) => {
    setProductID(productId);
  };
  const handleClose = () => {
    setProductID(null);
  };

  const handleImage = (array) => {
    setClickedImg(true);
    setAllImages(array);
  };
  return (
    <>
      <Breadcrumb />
      <div className="p-6 mb-3 font-poppins">
        <div className="mb-6">
          <h2 className="text-[40px] font-bold mb-2 font-poppins">Images</h2>
          <h2 className="text-[20px]">8 Images</h2>
        </div>
        <div>
          {isLoading ? (
            <Loader />
          ) : (
            data?.images?.map((it) => {
              return (
                <div>
                  {it?.images?.map((it2) => {
                    return (
                      <>
                        <div className="flex">
                          {it2.productId !== productID ? (
                            <>
                              <span
                                className="cursor-pointer mt-1 mr-1 text-2xl"
                                onClick={() => handleOpen(it2.productId)}
                              >
                                <MdArrowRight />
                              </span>
                              <h2
                                className="text-fontColor cursor-pointer text-xl"
                                onClick={() => handleOpen(it2.productId)}
                              >
                                {it2?.productName}
                              </h2>
                            </>
                          ) : (
                            <>
                              <span
                                className="cursor-pointer mt-1 mr-1 text-2xl"
                                onClick={() => handleClose(it2.productId)}
                              >
                                <MdArrowDropDown />
                              </span>
                              <h2
                                className="text-fontColor cursor-pointer text-xl"
                                onClick={() => handleClose(it2.productId)}
                              >
                                {it2?.productName}
                              </h2>
                            </>
                          )}
                        </div>
                        <div
                          className={
                            it2.productId === productID
                              ? "flex items-center flex-wrap gap-3 mb-5"
                              : "hidden"
                          }
                        >
                          {it2?.imagesS3Urls?.map((arr, index, array) => {
                            return (
                              <>
                                {/* dynamic data show here */}
                                <div className="w-36 h-20 border-2 border-gray-400">
                                  <img
                                    className="w-full h-full cursor-pointer"
                                    src={arr}
                                    alt="product"
                                    onClick={() => handleImage(array)}
                                  />
                                </div>
                              </>
                            );
                          })}

                          <label htmlFor="uploadFile">
                            <div className="w-36 h-20 bg-gray-200 flex items-center justify-center cursor-pointer border-2 border-gray-400">
                              <MdAddCircle className="text-gray-700 text-3xl" />
                            </div>
                          </label>
                          <input type="file" id="uploadFile" hidden />
                        </div>
                      </>
                    );
                  })}
                </div>
              );
            })
          )}
        </div>
      </div>
      {clickedImg && (
        <ImageModal allImages={allImages} setClickedImg={setClickedImg} />
      )}
    </>
  );
};

export default Images;
