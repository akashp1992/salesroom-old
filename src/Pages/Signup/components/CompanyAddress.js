import React, { useContext } from "react";

import { Formik } from "formik";
import { Input } from "formik-antd";
import * as Yup from "yup";
import MultiStepFormContext from "./MultiStepFormContext";
import SignupLoader from "./SignupLoader";
import { Button } from "@mui/material";

// const SignupSchema = Yup.object().shape({
//   addressLine1: Yup.string()
//     .min(2, 'Too Short!')
//     .required('Required'),
//   addressLine2: Yup.string()
//     .min(2, 'Too Short!')
//     .required('Required'),
//   landmark: Yup.string()
//     .min(2, 'Too Short!')
//     .required('Required'),
//   pincode: Yup.string()
//     .min(4, 'Too Short!')
//     .required('Required'),
//   district: Yup.string()
//     .min(2, 'Too Short!')
//     .required('Required'),
//   state: Yup.string()
//     .min(2, 'Too Short!')
//     .required('Required'),
// });

const CompanyAddress = () => {
  const [Isloading, setLoading] = React.useState(false);

  const { companyAddress, setCompanyAddress, next, prev } =
    useContext(MultiStepFormContext);
  const SalesroomForm = () => {
    const handleSubmitNext = (e) => {
      e.preventDefault();
      next();
    };

    const SendCompanyAddress = (Address) => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setCompanyAddress(Address);
        next();
      }, 1000);
    };
    const onclickSkip = () => {
      next();
    };
    console.log(companyAddress);
    return (
      <Formik
        initialValues={companyAddress}
        onSubmit={(values) => SendCompanyAddress(values)}
      >
        {({ handleSubmit, errors }) => {
          return (
            <>
              <form onSubmit={() => handleSubmit(handleSubmitNext)}>
                <div className="body">
                  <div className="grid grid-cols-4 gap-3">
                    {/* 1 */}
                    <div className="col-span-4">
                      <div className={`form__item`}>
                        <Input
                          name="addressLine1"
                          placeholder="Address 1"
                          autoComplete="off"
                        />
                      </div>
                    </div>
                    {/* 2 */}
                    <div className="col-span-4">
                      <div className={`form__item`}>
                        <Input
                          name="addressLine2"
                          placeholder="Address 2"
                          autoComplete="off"
                        />
                      </div>
                    </div>
                    {/* 3 */}
                    <div className="col-span-3">
                      <div className={`form__item`}>
                        <Input
                          name="landmark"
                          placeholder="Landmark"
                          autoComplete="off"
                        />
                      </div>
                    </div>
                    {/* 4 */}
                    <div className="col-span-1">
                      <div className={`form__item`}>
                        <Input
                          type="number"
                          name="pincode"
                          placeholder="PinCode"
                          autoComplete="off"
                        />
                      </div>
                    </div>
                    {/* 5 */}
                    <div className="col-span-2">
                      <div className={`form__item`}>
                        <Input
                          name="district"
                          placeholder="District"
                          autoComplete="off"
                        />
                      </div>
                    </div>
                    {/* 6 */}
                    <div className="col-span-2">
                      <div className={`form__item`}>
                        <Input
                          name="state"
                          placeholder="State"
                          autoComplete="off"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="footer mb-5">
                  <div className="flex justify-between gap-3 ml-auto">
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
              </form>
            </>
          );
        }}
      </Formik>
    );
  };

  return (
    <div className="grid">
      <div className="header  mb-7">
        <h2 className="text-[26px] font-medium">Enter your company address</h2>
      </div>
      <SalesroomForm />
    </div>
  );
};

export default CompanyAddress;
