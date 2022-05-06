import React, { useContext, useState } from "react";
import { Formik } from "formik";

import { Input } from "formik-antd";
import MultiStepFormContext from "./MultiStepFormContext";
import linkedin from "../../../Assets/images/image/linkedin.jpeg";
import Instagram from "../../../Assets/images/image/Instagram.jpeg";
import twitter from "../../../Assets/images/image/twitter.jpeg";
import SignupLoader from "./SignupLoader";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { businessCreateAndUpdateUrl } from "../../../constants/constants";
import globalContext from "../../../context/globalContext";
const SocialMediaLinks = () => {
  const {
    setSocialMedia,
    prev,
    roomName,
    website,
    WorkEmail,
    companyAddress,
    salesToWork,
    socialMedia,
  } = useContext(MultiStepFormContext);
  const { businessData } = useContext(globalContext);
  const [Isloading, setLoading] = React.useState(false);
  const [response, setResponse] = useState(null);
  const { businessId } = businessData;
  console.log(businessId);
  const navigate = useNavigate();
  let userInfo = {
    businessId: businessId,
    businessLogoS3Url: website.businessLogoS3Url,
    businessName: roomName.businessName,
    primaryEmail: WorkEmail.primaryEmail,
    address: companyAddress,
    additionalInfo: salesToWork,
    socialMediaInfo: null,
    websiteUrl: website.websiteUrl,
  };
  const handleSocialMedia = (data) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSocialMedia(data);
      userInfo = {
        businessId: businessId,
        businessLogoS3Url: website.businessLogoS3Url,
        businessName: roomName.businessName,
        primaryEmail: WorkEmail.primaryEmail,
        address: companyAddress,
        additionalInfo: salesToWork,
        socialMediaInfo: data,
        websiteUrl: website.websiteUrl,
      };
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userInfo),
      };
      fetch(businessCreateAndUpdateUrl, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setResponse(data);
        });
    }, 1000);
  };
  const handleSkip = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userInfo),
    };
    fetch(businessCreateAndUpdateUrl, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setResponse(data);
      });
  };

  if (response) {
    navigate("/dashboard/products");
  }
  return (
    <Formik
      initialValues={socialMedia}
      onSubmit={(values) => handleSocialMedia(values)}
    >
      {({ handleSubmit, errors }) => {
        return (
          <>
            <div className="header ">
              <h2 className="text-[26px] font-medium mb-0">
                Enter social media links
              </h2>
              <p className="text-gray-500 text-lg absolute font-medium">
                This will help us customise salesroom for you
              </p>
            </div>

            <div className="grid grid-cols-4 gap-3 ">
              <div className="body col-span-4 pt-14">
                <div className="grid grid-cols-4 gap-3">
                  <div className="col-span-4">
                    <div className="flex justify-center mb-4">
                      <div className="flex items-center mr-3">
                        <img
                          className="w-10/12"
                          src={linkedin}
                          alt="linkedin"
                        />
                      </div>
                      <Input
                        className="!mb-0"
                        name={"linkedInUrl"}
                        defaultValue={null}
                        placeholder="Enter LinkedIn profile link"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="col-span-4">
                    <div className="flex justify-center mb-4">
                      <div className="flex items-center mr-3">
                        <img
                          className="w-10/12"
                          src={Instagram}
                          alt="Instagram"
                        />
                      </div>
                      <Input
                        className="!mb-0"
                        name={"instagramUrl"}
                        defaultValue={null}
                        placeholder="Enter Instagram profile link"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="col-span-4">
                    <div className="flex justify-center mb-4">
                      <div className="flex items-center mr-3">
                        <img className="w-10/12" src={twitter} alt="twitter" />
                      </div>
                      <Input
                        className="!mb-0"
                        name={"twitterUrl"}
                        defaultValue={null}
                        placeholder="Enter twitter profile link"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer col-span-4 gap-3 mb-5 flex justify-between">
                <Button className="btn-blue" onClick={() => prev()}>
                  Back
                </Button>
                <div>
                  <Button type={"default"} onClick={handleSkip}>
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
          </>
        );
      }}
    </Formik>
  );
};

export default SocialMediaLinks;
