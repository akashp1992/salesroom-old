import React from "react";
import { IoCreateSharp } from "react-icons/io5";
import { FaShare } from "react-icons/fa";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
const NavBar = () => {
  return (
    <nav className="py-4 border-b-2 border-[#C7C7C7]">
      <div className="flex px-3">
        <div className="basis-[40%]">
          <Link to="/dashboard">
            <img
              className="w-48"
              src={require("../../Assets/images/image/logo.png")}
              alt="logo"
            />
          </Link>
        </div>
        <div className="font-poppins flex items-center justify-start basis-[60%]">
          <Dropdown />
          <button className="text-white py-[6px] px-4 bg-primary rounded-full text-md font-semibold flex justify-between shadow-xl mr-3">
            <span className="text-xl font-semibold px-2">
              <IoCreateSharp />
            </span>
            Create
          </button>
          <button className="text-white py-[6px] px-4 bg-black rounded-full text-md font-semibold flex justify-between shadow-xl mr-3">
            <span className="text-xl font-semibold px-2">
              <FaShare />
            </span>
            Share
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
