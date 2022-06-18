import React from "react";
import { Link } from "react-router-dom";
import FrontPageNewsCard from "../../common/FrontPageNewsCard";

const baseUrl = process.env.REACT_APP_API_BASE_URL;
const commonClass = "space-y-1 md:space-y-0 md:flex";

const MainPage = ({ news = [], ad }) => {
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

        {/* ======================= Ad Area ======================= */}
        {ad?.heroSectionAdImage && (
          <div className="pt-4">
            {ad.link ? (
              <Link to={ad.link} target="_blank" className="w-full">
                <div className="w-full h-24">
                  <img
                    src={`${baseUrl}${ad.heroSectionAdImage}`}
                    alt={ad.link}
                    className="w-full h-full"
                  />
                </div>
              </Link>
            ) : (
              <div className="w-full h-24 relative">
                <img
                  src={`${baseUrl}${ad.heroSectionAdImage}`}
                  alt={ad.link}
                  className="w-full h-full"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MainPage;
