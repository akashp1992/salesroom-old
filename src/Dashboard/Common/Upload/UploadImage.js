import React, { useContext, useEffect } from "react";
import { FaRegWindowClose } from "react-icons/fa";
import { MdAddAPhoto } from "react-icons/md";
import ImageUploading from "react-images-uploading";
import globalContext from "../../../context/globalContext";

const UploadImage = (props) => {
  const { imageS3Urls } = useContext(globalContext);
  const { images, onChange } = props;
  let formdata = new FormData();
  formdata.append("file", images[0]?.file);
  formdata.append(
    "businessId",
    parseInt("43652f2d-7324-43be-bd81-34f2af6e34a6")
  );
  formdata.append("category", "CATEGORY");

  let requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };
  useEffect(() => {
    fetch("http://api-qa.salesroom.in/v1/documents/upload", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        imageS3Urls.push(result.uploadInfos[0]?.path);
      })
      .catch((error) => console.log("error", error));
  }, [images[0]?.file]);
  const maxNumber = 10;
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
          <div className="bg-gray-200 shadow-lg rounded-3xl w-[150px] h-[150px] flex items-center justify-center">
            <button
              style={isDragging ? { color: "red" } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              <MdAddAPhoto className="text-4xl" />
            </button>
            &nbsp;
            {imageList.map((image, index) => (
              <>
                <div
                  key={index}
                  className="image-item absolute flex justify-center items-center p-[10px] w-[160px] h-[160px] flex-col"
                >
                  <img
                    src={image["data_url"]}
                    alt=""
                    className="h-full w-full mx-auto"
                  />
                  <button
                    onClick={() => onImageRemove(index)}
                    className="bg-gray-500 self-start mt-2"
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

export default UploadImage;
