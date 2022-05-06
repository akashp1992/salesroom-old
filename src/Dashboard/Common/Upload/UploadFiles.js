import React from "react";
import { FaRegWindowClose, FaEdit } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
import ImageUploading from "react-images-uploading";

const UploadFiles = (props) => {
  const { images, onChange } = props;
  const maxNumber = 69;

  {
    console.log("images===", images);
  }
  return (
    <>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
        acceptType={["jpg", "jpeg", "png", "pdf", "doc", "docx"]}
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
          <div className="upload__image-wrapper grid grid-cols-5">
            {console.log("imageList", imageList)}
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image["data_url"]} alt="" width="100" />
                <div className="image-item__btn-wrapper flex gap-3">
                  <button onClick={() => onImageUpdate(index)}>
                    <FaEdit className="text-[16px]" />
                  </button>
                  <button onClick={() => onImageRemove(index)}>
                    <FaRegWindowClose className="text-[16px]" />
                  </button>
                </div>
              </div>
            ))}
            <button
              style={isDragging ? { color: "red" } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              <img
                src={require("../../../Assets/images/icon/addImage.png")}
                width={160}
                height={207}
                className="rounded-[20px] cursor-pointer"
              />
            </button>
            &nbsp;
          </div>
        )}
      </ImageUploading>
    </>
  );
};

export default UploadFiles;
