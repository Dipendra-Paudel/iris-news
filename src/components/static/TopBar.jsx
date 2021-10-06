import React from "react";
import CalendarIcon from "../../icons/calendar";
import FacebookIcon from "../../icons/facebook";
import InstagramIcon from "../../icons/instagram";
import TwitterIcon from "../../icons/twitter";

const iconWidth = 18;

const socialSites = [
  {
    icon: <FacebookIcon width={iconWidth} />,
    url: "https://www.facebook.com",
  },
  {
    icon: <InstagramIcon width={iconWidth} />,
    url: "https://www.facebook.com",
  },
  {
    icon: <TwitterIcon width={iconWidth} />,
    url: "https://www.facebook.com",
  },
];

const TopBar = () => {
  return (
    <div className="common-style border-b">
      <div className="common-style-2">
        <div className="flex justify-between items-center pt-3 pb-2 space-x-4 text-sm">
          <div className="flex items-center space-x-2">
            <div>
              <CalendarIcon width={iconWidth} />
            </div>
            <div>Tuesday, 5 October 2021</div>
          </div>
          <div className="flex text-gray-700 space-x-4">
            {socialSites.map((site, index) => {
              const { icon, url } = site;
              return (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className={index === socialSites.length - 1 ? "pl-1" : ""}
                >
                  {icon}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
