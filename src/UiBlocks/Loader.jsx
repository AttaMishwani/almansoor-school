// src/UiBlocks/Loader.jsx
import React from "react";
import { MoonLoader } from "react-spinners";

const Loader = ({ size = 50, color = "#00c2ff", message = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[200px]">
      <MoonLoader size={size} color={color} />
      <p className="mt-4 text-gray-600 font-medium">{message}</p>
    </div>
  );
};

export default Loader;
