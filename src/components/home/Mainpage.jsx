import React from "react";
import FrontPageNewsCard from "../../common/FrontPageNewsCard";
import GoogleAdsense from "../../common/Adsense";

const commonClass = "space-y-1 md:space-y-0 md:flex";

const MainPage = ({ news = [] }) => {
  return (
    <div className="common-style py-4">
      <div className="common-style-2">
        {news.length === 4 && (
          <div className={`${commonClass} md:space-x-1`}>
            <div className="flex-1">
              <FrontPageNewsCard {...news[0]} type="l1" />
            </div>
            <div
              className={`flex-1 flex-col ${commonClass} md:space-y-1 justify-between`}
            >
              <div className="flex-1 h-full">
                <FrontPageNewsCard {...news[1]} />
              </div>
              <div className={`${commonClass} md:space-x-1 flex-1`}>
                <div className="flex-1">
                  <FrontPageNewsCard {...news[2]} />
                </div>
                <div className="flex-1">
                  <FrontPageNewsCard {...news[3]} />
                </div>
              </div>
            </div>
          </div>
        )}

        {news.length === 3 && (
          <div className={`${commonClass} md:space-x-1`}>
            <div className="flex-1">
              <FrontPageNewsCard {...news[0]} type="l1" />
            </div>
            <div
              className={`flex-1 flex-col ${commonClass} md:space-y-1 justify-between`}
            >
              <div className="flex-1">
                <FrontPageNewsCard {...news[1]} />
              </div>
              <div className="flex-1">
                <FrontPageNewsCard {...news[2]} />
              </div>
            </div>
          </div>
        )}

        {news.length === 2 && (
          <div className={`${commonClass} md:space-x-1`}>
            <div className="flex-1">
              <FrontPageNewsCard {...news[0]} type="l1" />
            </div>
            <div className="flex-1">
              <FrontPageNewsCard {...news[1]} type="l1" />
            </div>
          </div>
        )}

        {news.length === 1 && (
          <div className={`${commonClass} md:space-x-1`}>
            <FrontPageNewsCard {...news[0]} type="l1" />
          </div>
        )}

        {/* Two ads */}
        <div className="space-y-1 md:space-y-0 md:flex md:space-x-1 mt-4">
          <div className="flex-1">
            <div className="w-full h-24">
              <GoogleAdsense />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
