import React, { useState } from "react";
import { RiFileCopy2Fill } from "react-icons/ri";
import { FaVideo } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { IoMdPhotos } from "react-icons/io";
import {
  MdWeb,
  MdBorderColor,
  MdPeopleOutline,
  MdContactMail,
} from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import { SiPagekit } from "react-icons/si";
import { Outlet, NavLink } from "react-router-dom";
const SideBar = () => {
  const [open, setOpen] = useState(true);
  const menus = [
    {
      icon: <RiFileCopy2Fill />,
      title: "My Products",
      path: "/dashboard/products",
    },
    { icon: <IoMdPhotos />, title: "Images", path: "/dashboard/images" },
    {
      icon: <MdWeb />,
      title: "Manuals",
      path: "/dashboard/manuals",
    },
    {
      icon: <MdBorderColor />,
      title: "CAD files",
      path: "/dashboard/cadFiles",
    },
    {
      icon: <SiPagekit />,
      title: "Catalogues",
      path: "/dashboard/catalogues",
    },
    { icon: <MdContactMail />, title: "Contact", path: "/dashboard/contact" },
    {
      icon: <FaVideo />,
      title: "videos",
      border: true,
      path: "/dashboard/videos",
    },
    { icon: <MdPeopleOutline />, title: "Members", path: "/dashboard/members" },
    { icon: <IoSettingsSharp />, title: "Setting", path: "/dashboard/setting" },
  ];
  return (
    <>
      <div className="flex">
        <div className={`${open ? "w-60" : "w-14"} sidebar-container sticky top-0`}>
          <span
            className={`menu-toggle cursor-pointer absolute top-9 w-7 text-black text-xl ${
              open ? "rotate-180 -right-[13.25px]" : " -right-[12.25px]"
            }`}
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <FiMenu className="ml-0" />
            ) : (
              <ImCross className="text-lg" />
            )}
          </span>
          <h1
            className={`text-black font-semibold text-xl p-3 ${
              !open && "scale-0"
            }`}
          >
            Deckmount Sales
          </h1>
          <div className="pt-4">
            <div>
              {menus.map((menu, index) => (
                <NavLink
                  to={menu?.path}
                  key={index}
                  className={({ isActive }) =>
                    isActive
                      ? `sidebar-link ${
                          !open ? "p-3" : "p-2"
                        } text-primary menu-active ${
                          menu.border && "border-b-2 border-b-[#C7C7C7]"
                        }`
                      : `sidebar-link ${!open ? "p-3" : "p-2"} text-fontColor ${
                          menu.border && "border-b-2 border-[#C7C7C7]"
                        }`
                  }
                >
                  <span className="">{menu.icon}</span>
                  <span
                    className={`${!open && "hidden"} origin-left duration-200`}
                  >
                    {menu.title}
                  </span>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
        <div className="text-2xl font-semibold flex-1 h-screen">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default SideBar;
