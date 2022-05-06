import React from "react";

const Loader = () => {
  return (
    <div className="h-screen col-span-4 mx-auto">
      <img
        src={require("../../../Assets/images/icon/spinner.gif")}
        className="h-40 mx-auto"
      />
    </div>
  );
};
export default Loader;
