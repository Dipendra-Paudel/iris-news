import React from "react";
import { Link, NavLink } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import capitalize from "../../utils/capitalize";
import logo from "../../assets/images/logo.png";

const Sidebar = ({ toggled, categories, changeToggled }) => {
  const handleSidebarLinkClick = () => {
    changeToggled(false);
    window.scrollTo(0, 0);
  };

  return (
    <div
      className={`text-gray-600 overflow-hidden bg-background fixed top-0 left-0 z-50 transition-all duration-500 h-screen sidebar ${
        toggled ? "w-full" : "w-0"
      }`}
    >
      <div className="z-50">
        <div>
          <div
            className="flex justify-between items-center px-4 py-2"
            style={{ minWidth: "300px" }}
          >
            <Link to="/">
              <img src={logo} alt="Logo" className="h-28 mx-auto" />
            </Link>
            <div onClick={() => changeToggled(false)}>
              <CloseIcon style={{ fontSize: "40px" }} />
            </div>
          </div>
        </div>

        <div className="px-6 pt-4 flex flex-col space-y-4">
          {categories.map((category, index) => {
            const { categoryName, _id } = category;

            return (
              <NavLink
                key={index}
                to={categoryName === "Home" ? "/" : `/category/${_id}`}
                onClick={handleSidebarLinkClick}
                activeClassName="text-blue-600 "
                className="font-semibold border-b border-gray-200 text-gray-500"
                exact
              >
                {categoryName === "Home" ? "Home" : capitalize(categoryName)}
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
