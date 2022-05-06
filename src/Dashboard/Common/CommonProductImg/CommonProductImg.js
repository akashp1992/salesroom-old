import React, { useState } from "react";
import { MdArrowRight, MdArrowDropDown, MdAddCircle } from "react-icons/md";

const CommonProductImg = ({ title, data }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex">
        <span
          className="cursor-pointer mt-1 mr-1 text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <MdArrowDropDown /> : <MdArrowRight />}
        </span>
        <h2
          className="text-fontColor cursor-pointer text-xl"
          onClick={() => setOpen(!open)}
        >
          {title}
        </h2>
      </div>
      <div
        className={open ? "flex items-center flex-wrap gap-5 mb-5" : "hidden"}
      >
        {/* dynamic data show here */}
        {data?.map((images) =>
          images?.imagesS3Urls?.map((imgUrl) => (
            <div className="w-36 h-auto">
              <img className="w-full h-full" src={imgUrl} alt="product" />
            </div>
          ))
        )}
        {/* <div className="w-36 h-auto">
          <img
            className="w-full h-full"
            src={require("../../../Assets/images/image/product1.png")}
            alt="product"
          />
        </div> */}

        {/* <div className="w-36 h-auto">
          <img
            className="w-full h-full"
            src={require("../../../Assets/images/image/product1.png")}
            alt="product"
          />
        </div> */}

        {/* static image */}
        <label htmlFor="uploadFile">
          <div className="w-36 h-20 bg-gray-200 flex items-center justify-center cursor-pointer">
            <MdAddCircle className="text-gray-700 text-3xl" />
          </div>
        </label>
        <input type="file" id="uploadFile" hidden />
      </div>
    </>
  );
};

export default CommonProductImg;
