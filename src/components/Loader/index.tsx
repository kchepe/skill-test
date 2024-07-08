import React from "react";
import { ClipLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <ClipLoader size={35} color="#3b82f6" />
      <span className="text-sm">Loading Data</span>
    </div>
  );
};

export default Loader;
