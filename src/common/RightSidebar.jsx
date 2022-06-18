import React from "react";
import { Link } from "react-router-dom";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

const RightSidebar = ({ ads = [] }) => {
  return (
    <div className="w-full md:w-56 lg:w-72">
      <div className="hidden lg:block space-y-10">
        {ads.map((ad, index) => (
          <div key={index}>
            {ad.link ? (
              <Link to={ad.link} target="_blank" className="w-full">
                <div className="w-full h-72">
                  <img
                    src={`${baseUrl}${ad.categoryAdImage}`}
                    alt={ad.link}
                    className="w-full h-full"
                  />
                </div>
              </Link>
            ) : (
              <div className="w-full h-72 relative">
                <img
                  src={`${baseUrl}${ad.categoryAdImage}`}
                  alt={ad.link}
                  className="w-full h-full"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightSidebar;
