import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { LinkButton } from "./button";

const HomePageNewsCard = ({
  image,
  title,
  content,
  createdAt,
  category,
  slug,
}) => {
  const date = new Date(createdAt);
  const day = date.getDate();
  const month = date.toLocaleDateString("default", { month: "long" });
  const year = date.getFullYear();

  return (
    <div className="overflow-hidden">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover object-left-top"
        />
      </div>
      <div>
        <div className="text-sm text-gray-700 flex items-center space-x-1 pt-2">
          <AccessTimeIcon style={{ fontSize: "20px" }} />
          <div>{`${month} ${day}, ${year}`}</div>
        </div>

        <div className="heading-1 truncate">{title}</div>
        <div className="text-sm text-gray-600 truncate">{content}</div>
        <div className="py-3">
          <LinkButton label="Read More" url={`/news/${slug}`} />
        </div>
      </div>
    </div>
  );
};

export default HomePageNewsCard;
