import React from "react";
import RightSidebar from "./RightSidebar";

const Container = ({ component, ads }) => {
  return (
    <div className="common-style py-4 md:py-8 lg:py-12">
      <div className="common-style-2">
        <div className="lg:flex lg:space-x-4 lg:space-x-8 relative space-y-8 lg:space-y-0">
          <div className="flex-1">{component}</div>
          <RightSidebar ads={ads} />
        </div>
      </div>
    </div>
  );
};

export default Container;
