import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import FolderIcon from "@mui/icons-material/Folder";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import capitalize from "../utils/capitalize";

const Category = () => {
  const categories = useSelector((state) => state.categories);
  return (
    <div>
      <div className="flex justify-between text-gray-600 border-b border-gray-400 pb-2">
        <div className="text-gray-700 font-semibold">Category</div>
        <FolderIcon />
      </div>
      <div className="flex flex-col space-y-1 mt-1">
        {categories.map((category, index) => {
          const { categoryName, slug } = category;
          return (
            <Link
              key={index}
              onClick={() => window.scrollTo(0, 0)}
              to={`/category/${slug}`}
              className="hover:text-blue-600 flex py-0.5 border-b border-gray-200"
            >
              <div className="flex items-center">
                <KeyboardArrowRightIcon
                  style={{ fontSize: "20px", marginTop: "2px" }}
                />
                <div>{capitalize(categoryName)}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
