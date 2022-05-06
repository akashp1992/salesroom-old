import React, { useContext, useState } from "react";
import { Formik } from "formik";
import { Input } from "formik-antd";
import MultiStepFormContext from "./MultiStepFormContext";
import "./Signup.module.scss";
import SignupLoader from "./SignupLoader";
import { Button } from "@mui/material";
import { verifyUserUrl } from "../../../constants/constants";
const WorkEmail = () => {
  const { WorkEmail, setWorkEmail, otpResponse, setOtpResponse, next } =
    useContext(MultiStepFormContext);
  const [Isloading, setLoading] = useState(false);
  const SendEmail = (EmailValue) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setWorkEmail(EmailValue);
      const sendData = {
        identifier: EmailValue.primaryEmail,
        verificationType: "EMAIL",
      };
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sendData),
      };
      fetch(verifyUserUrl, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          setOtpResponse(data);
        });
    }, 1000);
  };
  if (otpResponse) {
    next();
  }
  return (
    <Formik
      initialValues={WorkEmail}
      onSubmit={(values) => SendEmail(values)}
      validate={(values) => {
        const errors = {};
        if (!values.primaryEmail) {
          errors.primaryEmail = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.primaryEmail)
        ) {
          errors.primaryEmail = "Invalid email address";
        }
        return errors;
      }}
    >
      {({ handleSubmit, errors }) => {
        return (
          <>
            <div className="header  mb-7">
              <h2 className="text-[26px] font-medium">
                Get started with Salesroom
              </h2>
            </div>
            <div className="grid grid-cols-4 gap-3">
              <div className="body col-span-4 pt-12">
                <div
                  className={`form__item ${
                    errors.primaryEmail && "input__error"
                  }`}
                >
                  <Input
                    name={"primaryEmail"}
                    placeholder="Enter your work email *"
                  />
                  <p className={"error__feedback"}>{errors.primaryEmail}</p>
                </div>
                <div
                  className={
                    "form__item button__items d-flex justify-content-end"
                  }
                ></div>
              </div>
              <div className="footer col-span-4 flex justify-between mb-5">
                <div></div>
                <Button
                  onClick={handleSubmit}
                  type="submit"
                  className="btn-blue"
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
export default WorkEmail;
