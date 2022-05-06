import React from "react";
import { Formik } from "formik";
// import * as EmailValidator from "email-validator";
import { Input, InputNumber } from "formik-antd";
import * as Yup from "yup";
const ValidatedLoginForm = () => (
  <Formik
    initialValues={{ Category: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        setSubmitting(false);
      }, 500);
    }}
    validationSchema={Yup.object().shape({
      Category: Yup.string().min(2, "Too Short!").required("Required"),
      ProductId: Yup.string().min(2, "Too Short!").required("Required"),
      ProductName: Yup.string().min(2, "Too Short!").required("Required"),
    })}
  >
    {(props) => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
      } = props;
      return (
        <div className="max-w-[800px]">
          <form onSubmit={handleSubmit} className="form">
            {/* 1 */}
            <div className="">
              <label htmlFor="Category">Category</label>
              <Input
                name="Category"
                type="text"
                placeholder="Category"
                value={values.Category}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.Category && touched.Category && "error"}
              />
              {errors.Category && touched.Category && (
                <p className="error">{errors.Category}</p>
              )}
            </div>
            {/* 2 */}
            <div className="">
              <label htmlFor="ProductId">Product Id</label>
              <Input
                name="ProductId"
                type="text"
                placeholder="Product Id"
                value={values.ProductId}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.ProductId && touched.ProductId && "error"}
              />
              {errors.ProductId && touched.ProductId && (
                <p className="error">{errors.ProductId}</p>
              )}
            </div>

            <div className="header mt-8">
              <h5 className="text-[20px] font-semibold">Product Info</h5>
            </div>
            <div className="grid grid-cols-5">
              <div className="col-span-1">
                {/* 1 */}
                <label htmlFor="ProductName">Selling Price ( Optional )</label>
                <Input
                  name="ProductName"
                  type="text"
                  placeholder="Product Name"
                  value={values.ProductName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.ProductName && touched.ProductName && "error"
                  }
                />
                {errors.ProductName && touched.ProductName && (
                  <p className="error">{errors.ProductName}</p>
                )}
              </div>
              <div className="col-span-4">
                {/* 2 */}
                <label htmlFor="ProductName">Product Name</label>
                <Input
                  name="ProductName"
                  type="text"
                  placeholder="Product Name"
                  value={values.ProductName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.ProductName && touched.ProductName && "error"
                  }
                />
                {errors.ProductName && touched.ProductName && (
                  <p className="error">{errors.ProductName}</p>
                )}
              </div>
              {/* 1 */}
              <div className="col-span-5">
                <label htmlFor="ProductName">Product Name</label>
                <Input
                  name="ProductName"
                  type="text"
                  placeholder="Product Name"
                  value={values.ProductName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.ProductName && touched.ProductName && "error"
                  }
                />
                {errors.ProductName && touched.ProductName && (
                  <p className="error">{errors.ProductName}</p>
                )}
              </div>
            </div>

            <button type="submit" disabled={isSubmitting}>
              Save
            </button>
          </form>
        </div>
      );
    }}
  </Formik>
);

export default ValidatedLoginForm;
