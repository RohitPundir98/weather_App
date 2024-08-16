import React from "react";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-48">
      <div className="w-16 h-16 border-4 border-t-4 border-blue-500 border-solid rounded-full border-t-transparent animate-spin"></div>
    </div>
  );
};

export default Spinner;