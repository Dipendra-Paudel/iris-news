import React from "react";
import { Link } from "react-router-dom";

const FrontPageNewsCard = ({
  image,
  heading,
  category,
  description,
  uploaded_at,
  type,
}) => {
  return (
    <Link
      to="/news/detail"
      onClick={() => window.scrollTo(0, 0)}
      className={`relative block h-56 md:${type === "l1" ? "h-96" : "h-48"}`}
    >
      <img src={image} alt={heading} className="w-full h-full object-cover" />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30  text-gray-200">
        <div className="font-semibold bg-yellow-600 inline-block px-4 py-1 ml-4 mt-4 text-sm">
          {category}
        </div>
        <div className="absolute bottom-0 left-0 w-full p-4">
          <div className="text-sm">{uploaded_at}</div>
          <div className="text-2xl font-semibold text-white">{heading}</div>
          <div className="text-xs">{description}</div>
        </div>
      </div>
    </Link>
  );
};

export default FrontPageNewsCard;
