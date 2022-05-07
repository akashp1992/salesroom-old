
import React, { useEffect, useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { useUpdateBusinessMutation } from '../../../../../store/services/businessServices/businessServices';

const BrandingTabContent = () => {
  const [businessUpdate, result] = useUpdateBusinessMutation();
  const [imagePath, setImagePath] = useState({});
  const [image, setImage] = useState({ preview: "", file: "", name: "" });
  const [values, setValues] = useState({
    websiteUrl: "",
    facebookUrl: "",
    instagramUrl: "",
    linkedinUrl: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleChange = e => {
    e.preventDefault();
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        file: e.target.files[0],
        name: e.target.files[0].name
      });
    }
  };

  //When Submit Button Click Data Will be Clear
  const clearFilledData = () => {
    setValues({
      facebookUrl: "",
      instagramUrl: "",
      linkedinUrl: "",
      websiteUrl: "",
    })
  }

  //All Data Submit When Submit Button Clicked
  const handleSubmit = (e) => {
    e.preventDefault();
    businessUpdate({
      businessId: "43652f2d-7324-43be-bd81-34f2af6e34a6",
      socialMediaInfo: {
        facebookUrl: values.facebookUrl,
        instagramUrl: values.instagramUrl,
        linkedInUrl: values.linkedinUrl,
      },
      websiteUrl: values.websiteUrl
    }).then(res => {
      if (res === 400) {
        alert("Some Error")
      } else {
        alert("Data Submited...")
        clearFilledData();
      }
    })
  }

  useEffect(() => {
    const formData = new FormData();
    if (!image.file) return
    formData.append("file", image.file);
    fetch(
      'http://api-qa.salesroom.in/v1/documents/upload?businessId=43652f2d-7324-43be-bd81-34f2af6e34a6&category=CATEGORY',
      {
        method: 'POST',
        body: formData,
      }
    )
      .then((response) => response.json())
      .then((result) => {
        console.log('Success:', result);
        if (result?.error?.data?.status === 500) {
          alert(result?.error?.data?.errorMsg);
        } else {
          setImagePath(result?.uploadInfos[0]);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert(error);
      });

  }
    , [image.file]);
  console.log(image.file);
  return (

    <form onSubmit={handleSubmit}>
      <h1 className="text-primary text-2xl">Logo</h1>
      <div className="w-36 h-26 border-2 border-gray-400">
        {image.preview ? (
          <img src={image.preview} alt="dummy" width="300" height="300" />

        ) : (<img
          className="w-full h-full cursor-pointer"
          src={require("../../../../../Assets/images/image/product1.png")}
          alt="product"
        />
        )}
      </div>
      <div className="flex items-center mb-10">
        <div className="flex items-center justify-start mt-4 mr-3">
          <button className="flex items-center justify-center modal-cancle-btn !capitalize">
            Delete
            <span className="ml-2 text-lg">
              <MdDelete />
            </span>
          </button>
        </div>
        <div className="flex items-center justify-start mt-4">
          <label
            for="logoUpload"
            className="flex items-center justify-center modal-cancle-btn !bg-gray-400 !capitalize cursor-pointer"
          >
            Edit
            <span className="ml-2 text-lg">
              <MdEdit />
            </span>
          </label>
          <input type="file" id="logoUpload" name="file" accept="image/*" onChange={handleChange} hidden></input>
        </div>
      </div>
      <h1 className="text-primary text-2xl">Company Website</h1>
      <input
        type="text"
        placeholder="Paste company website link"
        name="websiteUrl"
        value={values.websiteUrl}
        onChange={handleInputChange}
        className="border-2 border-gray-400 focus:outline-none text-lg mb-10"
      />
      <h1 className="text-primary text-2xl">Social Media</h1>
      <div>
        <div className="flex items-center">
          <h2 className="text-lg w-44">Linkedin</h2>
          <input
            type="text"
            placeholder="Paste company linkedin profile link"
            name="linkedinUrl"
            value={values.linkedinUrl}
            onChange={handleInputChange}
            className="border-2 border-gray-400 focus:outline-none text-lg mb-3"
          />
        </div>
        <div className="flex items-center">
          <h2 className="text-lg w-44">Facebook</h2>
          <input
            type="text"
            name="facebookUrl"
            value={values.facebookUrl}
            onChange={handleInputChange}
            placeholder="Paste company Facebook profile link"
            className="border-2 border-gray-400 focus:outline-none text-lg mb-3"
          />
        </div>
        <div className="flex items-center">
          <h2 className="text-lg w-44">Instagram</h2>
          <input
            type="text"
            name="instagramUrl"
            value={values.instagramUrl}
            onChange={handleInputChange}
            placeholder="Paste company Instagram profile link"
            className="border-2 border-gray-400 focus:outline-none text-lg mb-3"
          />
        </div>
      </div>
      <button className="modal-cancle-btn ml-auto block" type="submit">Submit</button>
    </form>
  );
};

export default BrandingTabContent;
