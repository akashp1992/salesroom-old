import React, { useContext } from "react";
import { Formik } from "formik";

import { Input, InputNumber } from "formik-antd";
import * as Yup from "yup";
import MultiStepFormContext from "./MultiStepFormContext";
import SignupLoader from "./SignupLoader";
import { Button } from "@mui/material";

const EnterPassword = () => {
  const { Password, setPassword, next, prev } =
    useContext(MultiStepFormContext);
  const [Isloading, setLoading] = React.useState(false);
  const SendPassword = (PassValue) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setPassword(PassValue);
      next();
    }, 1000);
  };
  const SignupSchema = Yup.object().shape({
    password: Yup.string()
      .min(8, "Min 8 charactor require")
      .max(16, "Too Long!")
      .required("Required")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  });

  return (
    <Formik
      validationSchema={SignupSchema}
      initialValues={Password}
      onSubmit={(values) => SendPassword(values)}
      validate={(values) => {
        const errors = {};
        if (!values.password) {
          errors.password = "Required";
        }
        // else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.password)) {
        //   errors.password = 'Invalid password address';
        // }

        return errors;
      }}
    >
      {({ handleSubmit, errors }) => {
        return (
          <>
            <div className="header  mb-7">
              <h2 className="text-[26px] font-medium">Enter password</h2>
            </div>
            <div className="grid grid-cols-4 gap-3">
              <div className="body col-span-4 pt-12">
                <div
                  className={`form__item ${errors.password && "input__error"}`}
                >
                  <Input
                    type="password"
                    name={"password"}
                    placeholder="Enter your work password *"
                  />
                  <p className={"error__feedback"}>{errors.password}</p>
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
export default EnterPassword;
