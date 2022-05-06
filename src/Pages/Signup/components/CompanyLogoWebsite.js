import React, { useContext, useState } from "react";
import { Formik } from "formik";

import { Input, InputNumber } from "formik-antd";
import MultiStepFormContext from "./MultiStepFormContext";
import ImageUploading from "react-images-uploading";
import { FaRegWindowClose } from "react-icons/fa";
import SignupLoader from "./SignupLoader";
import { Button } from "@mui/material";
import { doucmentUploadApi } from "../../../constants/constants";
const CompanyLogoWebsite = () => {
  const { website, setWebsite, next, prev, businessData } =
    useContext(MultiStepFormContext);
  const [Isloading, setLoading] = React.useState(false);
  const [images1, setImages1] = React.useState();
  const maxNumber = 69;
  const onChange1 = (imageList1, addUpdateIndex) => {
    // data for submit
    setImages1(imageList1);
  };
  console.log(images1);
  // Add Images Component
  const AddImages = (props) => {
    const { images, onChange } = props;
    return (
      <>
        <ImageUploading
          // multiple
          value={images}
          onChange={onChange}
          maxNumber={maxNumber}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            // write your building UI
            <div className="upload__image-wrapper mb-8">
              <button
                style={isDragging ? { color: "red" } : undefined}
                onClick={onImageUpload}
                {...dragProps}
              >
                <div className="flex flex-col justify-center items-center h-[150px] w-[160px] rounded-3xl shadow-xl bg-[#ecedf0]">
                  <h3 className="mb-0 text-[20px] font-semibold ">
                    Upload Logo
                  </h3>
                  <h3 className="mb-0 text-[30px] font-semibold leading-7">
                    +
                  </h3>
                </div>
              </button>
              &nbsp;
              {/* <button onClick={onImageRemoveAll}><FaRegWindowClose /></button> */}
              {imageList.map((image, index) => (
                <>
                  <div
                    key={index}
                    className="image-item absolute -mt-[148px] flex justify-center items-center w-[158px] h-[150px]"
                  >
                    <img
                      src={image["data_url"]}
                      alt=""
                      className="max-h-[140px] max-w-[140px] mx-auto"
                    />
                  </div>
                  <div className="image-item__btn-wrapper">
                    {/* <button onClick={() => onImageUpdate(index)}>Update</button> */}
                    <button
                      onClick={() => onImageRemove(index)}
                      className="absolute"
                    >
                      <FaRegWindowClose className="text-[14px]" />
                    </button>
                  </div>
                </>
              ))}
            </div>
          )}
        </ImageUploading>
      </>
    );
  };
  const SendCompanyInfo = (Name) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      var formdata = new FormData();
      formdata.append("file", images1[0].file);
      formdata.append("businessId", parseInt(businessData.businessId));
      formdata.append("category", "CATEGORY");

      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };

      fetch(doucmentUploadApi, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          website.businessLogoS3Url = result.uploadInfos[0].path;
        })
        .catch((error) => console.log("error", error));
      setWebsite(Name);
      next();
    }, 1000);
  };
  return (
    <Formik
      initialValues={website}
      onSubmit={(values) => SendCompanyInfo(values)}
    >
      {({ handleSubmit }) => {
        return (
          <>
            <div className="header  mb-7">
              <h2 className="text-[26px] font-medium">
                Enter your company logo {"&"} Website
              </h2>
            </div>
            <div className="gap-3">
              <div className="body col-span-4 mb-5">
                {/* Upload Logo Start  */}
                <div className="flex justify-center">
                  <AddImages images={images1} onChange={onChange1} />
                </div>
                {/* Upload Logo End  */}

                <div className={`form__item`}>
                  <Input
                    name={"websiteUrl"}
                    placeholder="Paste Website Link "
                  />
                </div>
                <div
                  className={
                    "form__item button__items d-flex justify-content-end"
                  }
                ></div>
              </div>
              <div className="footer col-span-4 gap-3 ml-auto mb-5">
                <div className="flex justify-between">
                  <Button className="btn-blue" onClick={() => prev()}>
                    Back
                  </Button>
                  <div>
                    <Button type={"default"} onClick={next}>
                      Skip
                    </Button>
                    <Button
                      type="button"
                      className="btn-blue"
                      onClick={handleSubmit}
                    >
                      {Isloading ? <SignupLoader isLoading={Isloading} /> : "Done"}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      }}
    </Formik>
  );
};
export default CompanyLogoWebsite;
