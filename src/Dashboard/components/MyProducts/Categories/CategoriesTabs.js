import React from "react";
import { MdKeyboardArrowRight, MdAdd } from "react-icons/md";
import { BiDotsVerticalRounded } from "react-icons/bi";
import Breadcrumb from "../../../Breadcrumb/Breadcrumb";
import { Link, useParams } from "react-router-dom";
import TabContentDetails from "./TabContentDetails";
import TabContentUploads from "./TabContentUploads";

const CategoriesTabs = (props) => {
  const [openTab, setOpenTab] = React.useState("Details");
  return (
    <>
      <Breadcrumb />
      <div className="flex flex-col w-full px-6 pt-7">
        <h3 className="font-bold">CPAP v1</h3>
      </div>

      <div className="flex font-poppins">
        <div className="w-full">
          <ul
            className="tabs-btn flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row px-6 border-b-2"
            role="tablist"
          >
            {/* Details tab */}
            <li className="-mb-px mr-2 last:mr-0 text-center">
              <a
                className={
                  openTab === "Details"
                    ? "tab-design !font-[500] active "
                    : "tab-design !font-[500]"
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab("Details");
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Profile
              </a>
            </li>
            {/* Uploads tab */}
            <li className="-mb-px mr-2 last:mr-0 text-center">
              <a
                className={
                  openTab === "Uploads"
                    ? "tab-design !font-[500] active "
                    : "tab-design !font-[500]"
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab("Uploads");
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Uploads
              </a>
            </li>
            {/* Specifications tab */}
            <li className="-mb-px mr-2 last:mr-0 text-center">
              <a
                className={
                  openTab === "Specifications"
                    ? "tab-design !font-[500] active "
                    : "tab-design !font-[500]"
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab("Specifications");
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Specifications
              </a>
            </li>
          </ul>
          <div className="body px-6">
            {/* Details tab Content */}
            <div
              className={
                openTab === "Details" ? "grid grid-cols-1 gap-6 mt-6" : "hidden"
              }
              id="link1"
            >
              <TabContentDetails setOpenTab={setOpenTab} />
            </div>
            {/* Uploads tab content */}
            <div
              className={openTab === "Uploads" ? "block mt-6" : "hidden"}
              id="link1"
            >
              <TabContentUploads />
            </div>
            {/* Specifications  tab content */}
            <div
              className={
                openTab === "Specifications"
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6"
                  : "hidden"
              }
              id="link1"
            >
              <h1>Specifications Content</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoriesTabs;
