import React from "react";

const NotFound = () => {
  return (
    <div className="py-20 px-4 md:px-8 lg:px-12 xl:px-20 text-center bg-gray-100">
      <div>
        <div className="text-5xl lg:text-7xl">404</div>
        <div className="text-gray-700">
          The page you are looking is not found on the server
        </div>
      </div>
    </div>
  );
};

export default NotFound;
