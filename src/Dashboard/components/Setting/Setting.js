import React, { useState } from "react";
import Breadcrumb from "../../Breadcrumb/Breadcrumb";
import SettingTabs from "./SettingTabs/SettingTabs";
import { Provider } from "./settingContext/settingContext";
const Setting = () => {
  const [showModal, setShowModal] = useState(false);
  const [changeName, setChangeName] = useState(false);
  const [showNameModal, setShowNameModal] = useState(false);
  const [passwordModal, setPasswordModal] = useState(false);
  return (
    <Provider
      value={{
        showModal,
        setShowModal,
        changeName,
        setChangeName,
        showNameModal,
        setShowNameModal,
        passwordModal, 
        setPasswordModal
      }}
    >
      <Breadcrumb />
      <div className="p-6 mb-3 font-poppins">
        <div className="mb-6">
          <h2 className="text-[40px] font-bold mb-2 font-poppins">Setting </h2>
        </div>
        <SettingTabs />
      </div>
    </Provider>
  );
};

export default Setting;
