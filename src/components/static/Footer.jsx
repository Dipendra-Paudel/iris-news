import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import YouTubeIcon from "@mui/icons-material/YouTube";
import capitalize from "../../utils/capitalize";
import FacebookIcon from "../../icons/facebook";
import InstagramIcon from "../../icons/instagram";
import TwitterIcon from "../../icons/twitter";
import logo from "../../assets/images/logo.jpg";

const facebookUrl = "https://www.facebook.com";
const instagramUrl = "https://www.instagram.com";
const twitterUrl = "https://www.twitter.com";
const youtubeUrl = "https://www.youtube.com";

const Footer = () => {
  const categories = useSelector((state) => state.categories);

  return (
    <div className="border-t bg-background">
      <div className="common-style py-10 lg:py-16">
        <div className="common-style-2">
          <div className="text-center md:text-left grid gap-6 sm:grid-cols-2 sm:gap-8 md:grid-cols-3">
            <div>
              <div>
                <img
                  src={logo}
                  alt="Iris News Logo"
                  className="h-28 mx-auto md:mx-0"
                />
              </div>
              <div className="text-s">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, totam?
              </div>
            </div>
            <div>
              <div className="font-semibold text-gray-800 mb-3">
                Popular Category
              </div>
              <div className="flex flex-col space-y-1.5">
                {categories.slice(0, 4).map((category, index) => {
                  const { categoryName, _id } = category;
                  return (
                    <Link
                      key={index}
                      to={`/category/${_id}`}
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      {capitalize(categoryName)}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div>
              <div className="font-semibold text-gray-800 mb-3">
                Stay Connected
              </div>
              <div className="space-y-1.5">
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center md:justify-start space-x-3"
                >
                  <div>
                    <FacebookIcon width={16} />
                  </div>
                  <div>Facebook</div>
                </a>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center md:justify-start space-x-3"
                >
                  <div>
                    <InstagramIcon width={16} />
                  </div>
                  <div>Instagram</div>
                </a>
                <a
                  href={twitterUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center md:justify-start space-x-3"
                >
                  <div>
                    <TwitterIcon width={16} />
                  </div>
                  <div>Twitter</div>
                </a>
                <div className="inline-block">
                  <a
                    href={youtubeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center md:justify-start space-x-2 w-auto"
                  >
                    <div>
                      <YouTubeIcon style={{ fontSize: "20px" }} />
                    </div>
                    <div>Youtube</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
