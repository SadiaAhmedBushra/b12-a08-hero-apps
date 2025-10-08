import React from "react";

const LoadingSpinner = ({ count = 8 }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-10">
      {Array.from({ length: 8 }).map((__, i) => (
        <div key={i} className="flex w-80 flex-col gap-4">
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      ))}
    </div>
  );
};

export default LoadingSpinner;
