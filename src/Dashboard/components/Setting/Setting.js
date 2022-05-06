import React from "react";
import Breadcrumb from "../../Breadcrumb/Breadcrumb";
import SettingTabs from "./SettingTabs/SettingTabs";
const Setting = () => {
  return (
    <>
      <Breadcrumb />
      <div className="p-6 mb-3 font-poppins">
        <div className="mb-6">
          <h2 className="text-[40px] font-bold mb-2 font-poppins">Setting </h2>
        </div>
        <SettingTabs />
      </div>
    </>
  );
};

export default Setting;
