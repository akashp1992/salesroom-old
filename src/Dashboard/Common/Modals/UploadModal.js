import React, { useContext, useState } from "react";
import modalContext from "./ModalContext";
import { useNavigate } from "react-router-dom";
import globalContext from "../../../context/globalContext";
import _ from "lodash";
import { doucmentUploadApi } from "../../../constants/constants";
import axios from "axios";
const UploadModal = () => {
  const { showModal, setShowModal, setUploadModal, dropdownItem } =
    useContext(modalContext);
  const {
    showUpload,
    setShowUpload,
    productId,
    categoryId,
    singleProductData,
    selectedProduct,
  } = useContext(globalContext);
  const [loadImage, setLoadImage] = useState([]);
  const [preview, setPreview] = useState([]);
  const navigate = useNavigate();
  const handleUpload = (e) => {
    setLoadImage(e.target.files);
    if (e.target.files) {
      const fileArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setPreview((prevImage) => prevImage.concat(fileArray));
    }
    Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
  };

  const handleDone = () => {
    if (dropdownItem === "Manual") {
      navigate("/dashboard/manuals");
    }
    if (dropdownItem === "Images") {
      navigate("/dashboard/images");
    }
    if (dropdownItem === "Catalogue") {
      navigate("/dashboard/catalogues");
    }
    if (dropdownItem === "CAD drawings") {
      navigate("/dashboard/cadFiles");
    }
    if (dropdownItem === "Videos") {
      navigate("/dashboard/videos");
    }
    var formdata = new FormData();

    _.forEach(loadImage, (file) => {
      formdata.append("file", file);
    });
    formdata.append(
      "businessId",
      parseInt("43652f2d-7324-43be-bd81-34f2af6e34a6")
    );
    formdata.append("category", "PRODUCT");
    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };
    fetch(doucmentUploadApi, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        let upadateProductInfo = {
          businessId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          productId,
          categoryId,
          productName: selectedProduct,
          productUniqueId: "string",
        };
        if (dropdownItem === "Manual") {
          const manualS3Urls = result?.uploadInfos.map((item) => item?.path);
          upadateProductInfo = {
            ...upadateProductInfo,
            manualS3Urls,
          };
        }
        if (dropdownItem === "Catalogues") {
          const customLinks = result?.uploadInfos.map((item) => item?.path);
          upadateProductInfo = {
            ...upadateProductInfo,
            customLinks,
          };
        }
        if (dropdownItem === "CAD drawings") {
          const cadDesignS3Urls = result?.uploadInfos.map((item) => item?.path);
          upadateProductInfo = {
            ...upadateProductInfo,
            cadDesignS3Urls,
          };
          console.log(cadDesignS3Urls);
        }
        axios
          .put("http://api-qa.salesroom.in/v1/products", upadateProductInfo)
          .then((res) => console.log(res));
      })
      .catch((error) => console.log("error", error));
    setUploadModal(false);
    setShowModal(false);
    setShowUpload(false);
  };
  const handleCencle = () => {
    setShowModal(false);
    setUploadModal(false);
    setShowUpload(false);
  };
  return (
    <>
      {(showModal || showUpload) && (
        <div className="w-[70vw] bg-white border-2 border-gray-400">
          {/*header*/}
          <div className="flex items-start justify-center p-5">
            <h3 className="text-2xl text-center">Choose file to upload</h3>
          </div>

          {/* body */}
          <div className="relative p-6 flex-auto h-[50vh]">
            <div className="grid grid-cols-4 gap-2 h-full">
              {preview.map((photo) => (
                <img
                  className="border-2 border-gray-600 w-full h-full object-cover"
                  src={photo}
                  key={photo}
                />
              ))}
            </div>
          </div>

          {/*footer*/}
          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
            <button
              className="modal-cancle-btn"
              type="button"
              onClick={handleCencle}
            >
              Cancle
            </button>
            {loadImage.length > 0 ? (
              <button className="modal-done-btn" onClick={handleDone}>
                Done
              </button>
            ) : (
              <label for="imageUpload" role="button" className="modal-done-btn">
                Upload
              </label>
            )}
            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              onChange={handleUpload}
              hidden
              multiple
            ></input>
          </div>
        </div>
      )}
    </>
  );
};

export default UploadModal;
