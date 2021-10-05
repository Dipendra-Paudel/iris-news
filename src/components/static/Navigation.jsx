import React from "react";
import logo from "../../assets/images/logo.png";
import ad1 from "../../assets/images/ads/ad-2.gif";

const Navigation = () => {
  return (
    <div>
      <div>
        <div className="space-y-4 md:flex items-center md:space-x-10">
          <div className="p-4 pb-0">
            <img src={logo} alt="Iris News Logo" className="w-28" />
          </div>

          {/* Place for ad */}
          <div className="flex-1">
            <img src={ad1} alt="Ad" className="w-full h-20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
