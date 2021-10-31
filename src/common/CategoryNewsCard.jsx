import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { LinkButton } from "./button";

const CategoryNewsCard = ({ image, title, content, createdAt, slug }) => {
  content = content.length > 150 ? `${content.slice(0, 150)}...` : content;

  const date = new Date(createdAt);
  const day = date.getDate();
  const month = date.toLocaleDateString("default", { month: "long" });
  const year = date.getFullYear();

  return (
    <div className="flex-1 md:flex md:space-x-5">
      <div className="relative flex-1">
        <img
          src={`https://pacific-hamlet-93409.herokuapp.com${image}`}
          alt={title}
          className="w-full h-56 object-cover object-left-top"
        />
      </div>
      <div className="flex-1">
        <div className="text-sm text-gray-700 flex items-center space-x-1 pt-2">
          <AccessTimeIcon style={{ fontSize: "20px" }} />
          <div>{`${month} ${day}, ${year}`}</div>
        </div>

        <div className="heading-1">{title}</div>
        <div className="text-sm text-gray-600">{content}</div>
        <div className="pt-4 md:pt-8">
          <LinkButton label="Read More" url={`/news/${slug}`} />
        </div>
      </div>
    </div>
  );
};

export default CategoryNewsCard;
