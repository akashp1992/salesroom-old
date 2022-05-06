import React, { useContext } from "react";
import { Formik, Field } from "formik";
import { Input } from "formik-antd";
import MultiStepFormContext from "./MultiStepFormContext";
import SignupLoader from "./SignupLoader";
import { Button } from "@mui/material";

const SalesroomToWork = () => {
  const { salesToWork, setSalesToWork, next, prev } =
    useContext(MultiStepFormContext);
  const [Isloading, setLoading] = React.useState(false);

  const handleSalesroomWork = (data) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSalesToWork(data);
      next();
    }, 1000);
  };
  return (
    <Formik
      initialValues={salesToWork}
      onSubmit={(values) => handleSalesroomWork(values)}
    >
      {({ handleSubmit, errors }) => {
        return (
          <>
            <div className="header mb-7">
              <h2 className="text-[26px] font-medium mb-0">
                Put Salesroom to work
              </h2>
              <p className="text-gray-500 text-lg absolute font-medium">
                This will help us customise salesroom for you
              </p>
            </div>
            <div className="grid grid-cols-4 gap-3">
              <div className="body col-span-4 pt-5">
                <div className="grid grid-cols-4 gap-3">
                  <div className="col-span-4">
                    <label
                      htmlFor="businessSize"
                      className="block mb-2 text-md font-medium text-gray-800"
                    >
                      How many members do you have in your organisation?
                    </label>
                    <Field
                      as="select"
                      id="businessSize"
                      name="businessSize"
                      className="form-select mb-4"
                    >
                      <option value={null}>
                        Select Your organisation size
                      </option>
                      <option value="ONE_TO_TEN">1 to 10</option>
                      <option value="TEN_TO_FIFTY">10 to 50</option>
                      <option value="FIFTY_TO_HUNDRED">50 to 100</option>
                      <option value="FIVE_HUNDRED_TO_THOUSAND">
                        500 to 1000
                      </option>
                      <option value="THOUSAND_PLUS">1000+</option>
                    </Field>
                  </div>
                  <div className="col-span-4">
                    <label
                      htmlFor="industry"
                      className="block mb-2 text-md font-medium text-gray-800"
                    >
                      Which industry does your organisation belong to ?
                    </label>
                    <Field
                      as="select"
                      name="industry"
                      className="form-select mb-4"
                    >
                      <option value={null}>
                        Select which industry does your organisation belong to
                      </option>
                      <option value="HEAT_APPLICATION">Heat Application</option>
                      <option value="AUTO_MOBILE">Auto Mobile</option>
                      <option value="MEDICAL_INSTRUMENTS">
                        Web Medical Instruments
                      </option>
                    </Field>
                  </div>
                  <div className="col-span-4">
                    <label
                      htmlFor="manufacturing"
                      className="block mb-2 text-md font-medium text-gray-800"
                    >
                      What does your company manufacture ?
                    </label>
                    <Input
                      name="manufacturing"
                      type="text"
                      defaultValue={null}
                      className="form-select mb-4"
                    />
                  </div>
                </div>
              </div>
              <div className="footer col-span-4 gap-3 mb-5">
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

export default SalesroomToWork;
