import React, { useContext, useState, useEffect } from "react";
import { MdKeyboardArrowRight, MdAdd } from "react-icons/md";
import { useNavigate, Link } from "react-router-dom";
import ProfileTabContent from "./TabContent/ProfileTabContent";
import BrandingTabContent from "./TabContent/BrandingTabContent";
import LanguageTabContent from "./TabContent/LanguageTabContent";
import BillingTabContent from "./TabContent/BillingTabContent";
const Tabs = () => {
  const [openTab, setOpenTab] = useState("Profile");
  return (
    <>
      <div className="flex">
        <div className="w-full">
          <ul
            className="tabs-btn flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            {/* Profile tab */}
            <li className="-mb-px mr-2 last:mr-0 text-center">
              <a
                className={
                  openTab === "Profile"
                    ? "tab-design !font-[500] active "
                    : "tab-design !font-[500]"
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab("Profile");
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Profile
              </a>
            </li>
            {/* branding tab */}
            <li className="-mb-px mr-2 last:mr-0 text-center">
              <a
                className={
                  openTab === "Branding"
                    ? "tab-design !font-[500] active"
                    : "tab-design !font-[500]"
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab("Branding");
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Branding
              </a>
            </li>
            {/* Language tab */}
            <li className="-mb-px mr-2 last:mr-0 text-center">
              <a
                className={
                  openTab === "Language"
                    ? "tab-design !font-[500] active"
                    : "tab-design !font-[500]"
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab("Language");
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Language
              </a>
            </li>
            {/* Language tab */}
            <li className="-mb-px mr-2 last:mr-0 text-center">
              <a
                className={
                  openTab === "Billing"
                    ? "tab-design !font-[500] active"
                    : "tab-design !font-[500]"
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab("Billing");
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Billing
              </a>
            </li>
          </ul>
          {/* categories tab content */}
          <div
            className={
              openTab === "Profile"
                ? "grid grid-cols-1 gap-6 mt-6"
                : "hidden"
            }
            id="link1"
          >
            {/* Profile tab content */}
            <ProfileTabContent />
          </div>
          {/* Branding tab content */}
          <div>
            <div
              className={
                openTab === "Branding"
                  ? "grid grid-cols-1 md:grid-cols-2 gap-6 mt-6"
                  : "hidden"
              }
              id="link1"
            >
              <BrandingTabContent />
            </div>
          </div>
          {/* Language tab content */}
          <div>
            <div
              className={
                openTab === "Language"
                  ? "grid grid-cols-1 gap-6 mt-6"
                  : "hidden"
              }
              id="link1"
            >
              <LanguageTabContent />
            </div>
          </div>
          {/* Billing tab content */}
          <div>
            <div
              className={
                openTab === "Billing"
                  ? "grid grid-cols-1 md:grid-cols-2 gap-6 mt-6"
                  : "hidden"
              }
              id="link1"
            >
              <BillingTabContent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
