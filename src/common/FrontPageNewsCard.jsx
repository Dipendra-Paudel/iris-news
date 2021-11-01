import React from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../components/auth/auth";
import capitalize from "../utils/capitalize";

const FrontPageNewsCard = ({
  image,
  title,
  category,
  createdAt,
  type,
  slug,
}) => {
  const date = new Date(createdAt);
  const day = date.getDate();
  const month = date.toLocaleDateString("default", { month: "long" });
  const year = date.getFullYear();

  const isHomepage = window.location.pathname === "/";

  return (
    <div
      className={`relative border block w-full ${
        type === "l1" ? "h-big" : "h-small"
      }`}
    >
      <Link
        to={`/news/${slug}`}
        className="w-full h-full"
        onClick={() => window.scrollTo(0, 0)}
      >
        <img
          src={`${baseUrl}${image}`}
          alt={title}
          className="w-full h-full object-cover object-left-top"
        />
        <div className="absolute top-0 left-0 w-full h-full text-white">
          {isHomepage && category && (
            <div className="font-semibold bg-yellow-600 inline-block absolute right-0 px-4 py-1 text-sm">
              {capitalize(category.categoryName)}
            </div>
          )}
          <div className="absolute bottom-0 left-0 w-full flex flex-col">
            <div>
              <div className="text-sm bg-black bg-opacity-50 inline-block p-1">
                {`${month} ${day}, ${year}`}
              </div>
            </div>
            <div className="overflow-hidden">
              <div className="truncate text-2xl font-semibold bg-black bg-opacity-50 p-1">
                {title}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FrontPageNewsCard;
