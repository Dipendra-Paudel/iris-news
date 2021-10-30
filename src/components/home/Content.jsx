import React from "react";
import { useSelector } from "react-redux";
import HomeNewsContainer from "./HomeNewsContainer";

const Content = () => {
  const categories = useSelector((store) => store.categories);

  return (
    <div className="flex-1 space-y-8">
      {categories.map((category, index) => (
        <HomeNewsContainer key={index} {...category} />
      ))}
    </div>
  );
};

export default Content;
