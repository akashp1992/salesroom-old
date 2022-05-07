import React, { useContext, useState } from "react";
import settingContext from "../../settingContext/settingContext";
import { useResetPasswordMutation } from "../../../../../store/services/userServices/userServices";
import { useForm } from "react-hook-form";
import { values } from "lodash";
const ChangePasswordModalContent = () => {
  const { setShowModal, setPasswordModal } = useContext(settingContext);
  const [resetUserPasword, result] = useResetPasswordMutation();
  const [value, setValues] = useState({ "oldPassword": "", "newPassword": "", "RepeatPassword": "" });
  const handleChange = (e) => {
    setValues({ ...value, [e.target.name]: e.target.value })
  }
  const onSubmit = (e) => {
    setShowModal(false);
    setPasswordModal(false);
    resetUserPasword({
      oldPassword: e.oldPassword,
      newPassword: e.newPassword,
      userId: "7b354ae5-e57d-434b-8adf-f7b0c5f5fedd"
    }).then((res) => {
      if (res?.error?.data?.status === 500) {
        alert(res?.error?.data?.errorMsg);
      } else {
        alert("Password changed successfully");
      }
    })
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: value,
    mode: "onTouched"
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label
          for="oldPassword"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Old Password
        </label>
        <input
          type="password"
          name="oldPassword"
          onChange={handleChange}
          placeholder="Enter old password"
          className="bg-gray-50 border border-black text-gray-900 text-sm focus:outline-none block w-[400px] p-2.5"
          {...register("oldPassword", {
            required: "This field is required",
            value: value.oldPassword
          })}
        />
        <span className="errormsg">
          {errors?.oldPassword && errors.oldPassword.message}
        </span>
      </div>
      <div className="mb-3">
        <label
          for="newPassword"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          New Password
        </label>
        <input
          type="password"
          name="newPassword"
          onChange={handleChange}
          placeholder="Enter New password"
          className="bg-gray-50 border border-black text-gray-900 text-sm focus:outline-none block w-[400px] p-2.5"
          {...register("newPassword", {
            required: "This field is required",
            value: value.newPassword
          })}
        />
        <span className="errormsg">
          {errors?.newPassword && errors.newPassword.message}
        </span>
      </div>
      <div className="mb-3">
        <label
          for="RepeatPassword"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Repeat Password
        </label>
        <input
          type="password"
          name="RepeatPassword"
          onChange={handleChange}
          placeholder="Enter Repeat password"
          className="bg-gray-50 border border-black text-gray-900 text-sm focus:outline-none block w-[400px] p-2.5"
          {...register("RepeatPassword", {
            required: "This field is required",
            value: value.RepeatPassword
          })}
        />
        <span className="errormsg mt-7">
          {errors?.RepeatPassword && errors.RepeatPassword.message}
        </span>
      </div>
      <p className="text-sm text-gray-400 mb-3">
        Use a password at least 15 letters long, or at least 8 Characters long
        with both letters and numbers.
      </p>
      <button className="modal-done-btn mr-auto" type="submit">
        Change Password
      </button>
    </form>
  );
};

export default ChangePasswordModalContent;
