import React from "react";
import { ImCross } from "react-icons/im";
import SimpleImageSlider from "react-simple-image-slider";
const ImageModal = ({ allImages, setClickedImg }) => {
    const handleModal =() =>{
        setClickedImg(false)
    }
  return (
    <div>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto">
          {/*content*/}
          <ImCross 
            className="cursor-pointer ml-auto mb-5"
            onClick={handleModal}
          />
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <SimpleImageSlider
              width={896}
              height={504}
              images={allImages}
              showBullets={true}
              showNavs={true}
            />
          </div>
        </div>
      </div>
      <div className={`opacity-25 fixed inset-0 z-40 bg-black`}></div>
    </div>
  );
};

export default ImageModal;
