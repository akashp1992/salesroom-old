import React, { useContext, useEffect } from "react";
import UploadFiles from "../../../Common/Upload/UploadFiles";

import UploadImage from "../../../Common/Upload/UploadImage";
import { useNavigate } from "react-router-dom";
// import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from "react-dropzone-uploader";
import globalContext from "../../../../context/globalContext";
import { useCreateProductMutation } from "../../../../store/services/productServices/productServices";
// min 3 max 10
const TabContentUploads = () => {
  const [images1, setImages1] = React.useState([]);
  const [images2, setImages2] = React.useState([]);
  const [images3, setImages3] = React.useState([]);
  const [images4, setImages4] = React.useState([]);
  const [manualFile, setManualFile] = React.useState(null);
  const [catalogue, setCatalogue] = React.useState(null);
  const [cadDesign, setCadDesign] = React.useState(null);
  const [videos, setVideos] = React.useState(null);
  const navigate = useNavigate();
  const {
    manualS3Urls,
    setManualS3Urls,
    cadDesignS3Urls,
    setCadDesignS3Urls,
    customLinks,
    setCustomLinks,
    imageS3Urls,
    setImageS3Urls,
    productData,
    categoryId,
    productName,
    catalogUrls,
    setCatalogUrls,
    videoUrls,
    setVideoUrls,
  } = useContext(globalContext);
  const [createProduct, result] = useCreateProductMutation();
  const onChange1 = (imageList1) => {
    setImages1(imageList1);
  };
  const onChange2 = (imageList2) => {
    setImages2(imageList2);
  };
  const onChange3 = (imageList3) => {
    setImages3(imageList3);
  };
  const onChange4 = (imageList4) => {
    setImages4(imageList4);
  };

  // Add Images Component
  // Dropzone
  const getUploadParams = ({ meta }) => {
    return { url: "https://httpbin.org/post" };
  };

  // called every time a file's `status` changes
  const handleManualChange = ({ meta, file }, status) => {
    setManualFile(file);
  };
  const handleCatalogueChange = ({ meta, file }, status) => {
    setCatalogue(file);
  };
  const handleCadDesignChange = ({ meta, file }, status) => {
    setCadDesign(file);
  };
  const handleVideosChange = ({ meta, file }, status) => {
    setVideos(file);
  };

  // Manual
  useEffect(() => {
    let formdata = new FormData();
    formdata.append("file", manualFile);
    formdata.append(
      "businessId",
      parseInt("43652f2d-7324-43be-bd81-34f2af6e34a6")
    );
    formdata.append("category", "CATEGORY");

    let requestOptions = {
      method: "POST",
      body: formdata,
    };
    fetch("http://api-qa.salesroom.in/v1/documents/upload", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        manualS3Urls.push(result.uploadInfos[0]?.path);
      })
      .catch((error) => console.log("error", error));
  }, [manualFile]);

  // catalogue
  useEffect(() => {
    let formdata = new FormData();
    formdata.append("file", catalogue);
    formdata.append(
      "businessId",
      parseInt("43652f2d-7324-43be-bd81-34f2af6e34a6")
    );
    formdata.append("category", "CATEGORY");

    let requestOptions = {
      method: "POST",
      body: formdata,
    };
    fetch("http://api-qa.salesroom.in/v1/documents/upload", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        catalogUrls.push(result.uploadInfos[0]?.path);
      })
      .catch((error) => console.log("error", error));
  }, [catalogue]);

  // CAD / Design Files
  useEffect(() => {
    let formdata = new FormData();
    formdata.append("file", cadDesign);
    formdata.append(
      "businessId",
      parseInt("43652f2d-7324-43be-bd81-34f2af6e34a6")
    );
    formdata.append("category", "CATEGORY");

    let requestOptions = {
      method: "POST",
      body: formdata,
    };
    fetch("http://api-qa.salesroom.in/v1/documents/upload", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        cadDesignS3Urls.push(result.uploadInfos[0]?.path);
      })
      .catch((error) => console.log("error", error));
  }, [cadDesign]);

  // Videos
  useEffect(() => {
    let formdata = new FormData();
    formdata.append("file", videos);
    formdata.append(
      "businessId",
      parseInt("43652f2d-7324-43be-bd81-34f2af6e34a6")
    );
    formdata.append("category", "CATEGORY");

    let requestOptions = {
      method: "POST",
      body: formdata,
    };
    fetch("http://api-qa.salesroom.in/v1/documents/upload", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        videoUrls.push(result.uploadInfos[0]?.path);
      })
      .catch((error) => console.log("error", error));
  }, [videos]);

  const handleCreateProduct = () => {
    const { priceInfo, productDescription, productUniqueId } = productData;
    const productInfo = {
      businessId: "43652f2d-7324-43be-bd81-34f2af6e34a6",
      categoryId,
      priceInfo,
      cadDesignS3Urls,
      productName,
      productUniqueId,
      productDescription,
      catalogUrls,
      imageS3Urls,
      manualS3Urls,
      videoUrls,
    };
    createProduct(productInfo);
    setManualS3Urls([]);
    setCadDesignS3Urls([]);
    setCatalogUrls([]);
    setImageS3Urls([]);
    setVideoUrls([]);
  };

  if (result?.isSuccess) {
    navigate("/dashboard/products");
  }
  return (
    <div className="max-w-[800px]">
      {/* Images */}
      <div className="mb-10">
        <div className="title">
          <h4 className="mb-6">Images</h4>
          <p className="text-[#908787] mb-1">Add images (At least 3)</p>
        </div>
        <div className="flex gap-5">
          <UploadImage images={images1} onChange={onChange1} />
          <UploadImage images={images2} onChange={onChange2} />
          <UploadImage images={images3} onChange={onChange3} />
          <UploadImage images={images4} onChange={onChange4} />
          {/* <UploadImage images={images5} onChange={onChange5} />
          <UploadImage images={images6} onChange={onChange6} />
          <UploadImage images={images7} onChange={onChange7} />
          <UploadImage images={images8} onChange={onChange8} />
          <UploadImage images={images9} onChange={onChange9} />
          <UploadImage images={images10} onChange={onChange10} /> */}
        </div>
      </div>
      {/* === Manual === */}
      {/* Header */}
      <div className="mb-10">
        <div className="title">
          <h4 className="mb-6">Manuals</h4>
          <p className="text-[#908787] mb-1">Add Manuals</p>
        </div>
        <div className="flex gap-5">
          {/* <UploadFiles images={images1} onChange={onChange1} /> */}
          <Dropzone
            maxFiles={10}
            getUploadParams={getUploadParams}
            onChangeStatus={handleManualChange}
            SubmitButtonComponent={SubmitBtn}
          />
        </div>
      </div>
      <div className="w-4/5 mb-10">
        <label htmlFor="ManualLink" className="text-[#908787] text-[14px]">
          Add Digital Manual Link (Optional)
        </label>
        <input
          className="text-sm border-2 border-gray-300 outline-none w-full"
          type="text"
          placeholder="Paste URL here"
        />
      </div>
      {/* === Catalogue === */}
      {/* Header */}
      <div className="mb-10">
        <div className="title">
          <h4 className="mb-6">Catalogue</h4>
          <p className="text-[#908787] mb-1">Add Catalogue</p>
        </div>
        <div className="flex gap-5">
          <Dropzone
            maxFiles={10}
            getUploadParams={getUploadParams}
            onChangeStatus={handleCatalogueChange}
            SubmitButtonComponent={SubmitBtn}
          />
        </div>
      </div>
      <div className="w-4/5 mb-10">
        <label htmlFor="ManualLink" className="text-[#908787] text-[14px]">
          Add Digital Catalogue Link (Optional)
        </label>
        <input
          className="text-sm border-2 border-gray-300 outline-none w-full"
          type="text"
          placeholder="Paste URL here"
        />
      </div>
      {/* === CAD / Design Files === */}
      {/* Header */}
      <div className="mb-10">
        <div className="title">
          <h4 className="mb-6">CAD / Design Files</h4>
          <p className="text-[#908787] mb-1">Add CAD / Design Files</p>
        </div>
        <div className="flex gap-5">
          <Dropzone
            maxFiles={10}
            getUploadParams={getUploadParams}
            onChangeStatus={handleCadDesignChange}
            SubmitButtonComponent={SubmitBtn}
          />
        </div>
      </div>
      {/* === Videos === */}
      {/* Header */}
      <div className="mb-10">
        <div className="title">
          <h4 className="mb-6">Videos</h4>
          <p className="text-[#908787] mb-1">Add videos</p>
        </div>
        <div className="flex gap-5">
          <Dropzone
            maxFiles={10}
            getUploadParams={getUploadParams}
            onChangeStatus={handleVideosChange}
            SubmitButtonComponent={SubmitBtn}
          />
        </div>
      </div>
      <div className="w-full flex justify-end py-7">
        <button
          type="button"
          className="btn-black text-[20px] px-6 py-1"
          onClick={handleCreateProduct}
        >
          Save
        </button>
      </div>
    </div>
  );
};

const SubmitBtn = () => {
  <h1>SubmitBtn Imagessss</h1>;
};

export default TabContentUploads;
