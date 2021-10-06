import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import LoopIcon from "@mui/icons-material/Loop";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/images/logo.png";
import ad1 from "../../assets/images/ads/ad-2.gif";
import Sidebar from "./Sidebar";

const navigationItems = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "News",
    url: "/news",
  },
  {
    title: "Fashion",
    url: "/fashion",
  },
  {
    title: "Gadgets",
    url: "/gadgets",
  },
  {
    title: "Lifestyle",
    url: "/lifestyle",
  },
  {
    title: "Video",
    url: "/video",
  },
  {
    title: "Features",
    url: "/features",
  },
];

const Navigation = () => {
  const [search, setSearch] = useState("");
  const [searching, setSearching] = useState(false);

  const [toggled, setToggled] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const handleBrowserResize = () => {
    const innerWidth = window.innerWidth;
    if (width < 768 && innerWidth > 767) {
      setWidth(innerWidth);
      document.body.style.overflow = "auto";
      setToggled(false);
    } else if (width > 767 && innerWidth < 768) {
      setWidth(innerWidth);
    } else if (width < 1024 && innerWidth > 1023) {
      setWidth(innerWidth);
    } else if (width > 1023 && innerWidth < 1024) {
      setWidth(innerWidth);
    }
  };

  const changeToggled = (bool) => {
    if (bool === true) {
      document.body.style.overflow = "hidden";
      setToggled(bool);
    } else {
      document.body.style.overflow = "auto";
      setToggled(bool);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleBrowserResize);
    return () => {
      window.removeEventListener("resize", handleBrowserResize);
    };
  });

  const handleNewsSearch = (event) => {
    event.preventDefault();
    setSearching(true);
    setTimeout(() => setSearching(false), 3000);
  };

  return (
    <div className="border-b shadow-lg md:px-10 lg:px-16">
      <div className="common-style-2">
        <div className="flex flex-col-reverse md:flex-row md:items-center md:space-x-10 md:py-2">
          <div className="flex justify-between items-center px-4 py-2">
            <Link to="/">
              <img src={logo} alt="Iris News Logo" className="w-28 mx-auto" />
            </Link>
            {width < 768 && (
              <div onClick={changeToggled}>
                <MenuIcon style={{ fontSize: "40px" }} />
              </div>
            )}
          </div>

          {/* Place for ad */}
          <div className="flex-1">
            <img src={ad1} alt="Ad" className="w-full h-20" />
          </div>
        </div>

        {/* All the navigation options */}
        <div className="flex justify-between items-center">
          <div className="hidden md:flex md:text-sm lg:text-base md:space-x-0 flex-wrap space-x-4 font-semibold text-gray-700">
            {navigationItems.map((navigation, index) => {
              const { title, url } = navigation;
              return (
                <NavLink
                  key={index}
                  to={url}
                  className="pt-3 pb-2 px-2 lg:px-4"
                  activeClassName="border-b-4 lg:border-b-4 border-blue-600"
                  exact
                >
                  {title}
                </NavLink>
              );
            })}
          </div>

          {width < 768 && (
            <Sidebar
              options={navigationItems}
              toggled={toggled}
              changeToggled={changeToggled}
            />
          )}

          <Sidebar options={navigationItems} />

          <div className="w-full md:w-auto px-4 pb-2 md:p-0">
            {/* Search field in the navigation bar */}
            <form
              onSubmit={handleNewsSearch}
              className="relative w-full md:w-48 lg:w-56"
            >
              <input
                type="text"
                className="p-2 pr-10 border border-gray-300 w-full focus:border-gray-400 text-sm"
                placeholder="Search News..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
              <div
                className="absolute right-0 top-0 h-full pl-1 pr-2 grid place-items-center cursor-pointer text-gray-600"
                onClick={handleNewsSearch}
              >
                {searching && <LoopIcon className="infinite-round" />}
                {!searching && <SearchIcon />}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
