import React from "react";
import FrontPageNewsCard from "../../common/FrontPageNewsCard";

// images
import image1 from "../../assets/images/sports/image-1.webp";
import image2 from "../../assets/images/sports/image-2.jpg";
import image3 from "../../assets/images/sports/image-3.jpg";
import image4 from "../../assets/images/sports/image-4.webp";

const news = [
  {
    heading: "IPL Playoffs",
    image: image1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, ratione.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, ratione.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, ratione.",
    category: "Sports",
    uploaded_at: "Oct 27, 2020",
  },
  {
    heading: "IPL Playoffs",
    image: image2,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, ratione.",
    category: "Sports",
    uploaded_at: "Oct 27, 2020",
  },
  {
    heading: "IPL Playoffs",
    image: image3,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, ratione.",
    category: "Sports",
    uploaded_at: "Oct 27, 2020",
  },
  {
    heading: "IPL Playoffs",
    image: image4,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, ratione.",
    category: "Sports",
    uploaded_at: "Oct 27, 2020",
  },
];

const commonClass = "space-y-1 md:space-y-0 md:flex";

const Home = () => {
  return (
    <div className="common-style py-4">
      <div className="common-style-2">
        <div className={`${commonClass} md:space-x-1`}>
          <div className="flex-1">
            <FrontPageNewsCard {...news[0]} type="l1" />
          </div>
          <div className={`flex-1 flex-col ${commonClass} md:space-y-1`}>
            <div className="flex-1">
              <FrontPageNewsCard {...news[1]} />
            </div>
            <div className={`${commonClass} md:space-x-1`}>
              <div className="flex-1">
                <FrontPageNewsCard {...news[2]} />
              </div>
              <div className="flex-1">
                <FrontPageNewsCard {...news[3]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
