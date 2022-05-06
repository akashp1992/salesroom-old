import React, { useContext } from "react";
import { Formik } from "formik";

import { Input, InputNumber } from "formik-antd";
import MultiStepFormContext from "./MultiStepFormContext";
import SignupLoader from "./SignupLoader";
import { Button } from "@mui/material";
import { businessCreateAndUpdateUrl } from "../../../constants/constants";
import axios from "axios";
import { useCreateUserMutation } from "../../../store/services/userServices/userServices";
import globalContext from "../../../context/globalContext";
const NameYourRoom = () => {
  const { Password, roomName, WorkEmail, setRoomName, next, prev } =
    useContext(MultiStepFormContext);
  const { businessData, setBusinessData, usersData, setUsersData } =
    useContext(globalContext);
  const [Isloading, setLoading] = React.useState(false);

  const SendRoom = (Name) => {
    setLoading(true);
    setTimeout(async () => {
      setLoading(false);
      setRoomName(Name);

      let userInfo = {
        businessLogoS3Url: null,
        businessName: Name.businessName,
        primaryEmail: WorkEmail.primaryEmail,
        address: null,
        additionalInfo: null,
        socialMediaInfo: null,
        websiteUrl: null,
      };
      // create business
      const response = await axios.post(businessCreateAndUpdateUrl, userInfo);
      console.log(response);
      setBusinessData(response.data);

      // create User
      if (response.data.businessId) {
        const createUserData = {
          businessId: response.data.businessId,
          email: WorkEmail.primaryEmail,
          fullName: Name.businessName,
          password: Password.password,
          role: "SUPER_ADMIN",
        };
        const userResponse = await axios.post(
          `http://api-qa.salesroom.in/v1/users`,
          createUserData
        );
        setUsersData(userResponse);
      }
      next();
    }, 1000);
  };
  return (
    <Formik
      initialValues={roomName}
      onSubmit={(values) => SendRoom(values)}
      validate={(values) => {
        const errors = {};
        if (!values.businessName) {
          errors.businessName = "Required";
        }
        return errors;
      }}
    >
      {({ handleSubmit, errors }) => {
        return (
          <>
            <div className="header mb-7">
              <h2 className="text-[26px] font-medium mb-0">Name your room</h2>
              <p className="text-gray-500 text-lg absolute font-medium">
                Store, create and share - all in one room
              </p>
            </div>
            <div className="grid grid-cols-4 gap-3">
              <div className="body col-span-4 pt-12">
                <h5>Room name</h5>
                <div
                  className={`form__item ${
                    errors.businessName && "input__error"
                  }`}
                >
                  <Input
                    name={"businessName"}
                    placeholder="You can enter your company name *"
                  />
                  <p className={"error__feedback"}>{errors.businessName}</p>
                </div>
                <div
                  className={
                    "form__item button__items d-flex justify-content-end"
                  }
                ></div>
              </div>
              <div className="footer col-span-4 flex justify-between mb-5">
                <div>
                  <Button className="btn-blue" onClick={() => prev()}>
                    Back
                  </Button>
                </div>
                <Button
                  type="button"
                  className="btn-blue"
                  onClick={handleSubmit}
                >
                  {Isloading ? <SignupLoader isLoading={Isloading} /> : "Done"}
                </Button>
              </div>
            </div>
          </>
        );
      }}
    </Formik>
  );
};

export default NameYourRoom;
