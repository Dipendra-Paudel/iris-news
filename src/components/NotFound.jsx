import React from "react";
import Navigation from "./static/Navigation";
import TopBar from "./static/TopBar";
import Footer from "./static/Footer";

const NotFound = () => {
  return (
    <div>
      <TopBar />
      <Navigation />

      <div className="py-20 px-4 md:px-8 lg:px-12 xl:px-20 text-center bg-gray-100">
        <div>
          <div className="text-5xl lg:text-7xl">404</div>
          <div className="text-gray-700">
            The page you are looking is not found on the server
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
