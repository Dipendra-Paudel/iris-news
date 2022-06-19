import React, { useEffect, useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import parse from "html-react-parser";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { getIndividualNews } from "../../api/news";
import Loader from "../../common/loader";
import Navigation from "../static/Navigation";
import TopBar from "../static/TopBar";
import Footer from "../static/Footer";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

const News = (props) => {
  const history = useRef();
  history.current = useHistory();
  const id = props.match.params.id.toLowerCase();
  const [news, setNews] = useState({});
  const [loading, setLoading] = useState(true);

  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    return () => {
      setMounted(false);
    };
  }, []);

  useEffect(() => {
    const asyncIndividualNews = async () => {
      const news = await getIndividualNews(id);
      if (mounted) {
        setNews(news || {});
        setLoading(false);
      }
    };

    loading && asyncIndividualNews();
  }, [loading, id, mounted]);

  useEffect(() => {
    !loading && !news.title && history.current.push("/not-found");
  }, [news, loading]);

  const {
    title,
    image,
    createdAt,
    content,
    headerAd,
    adBeforePost,
    adAfterPost,
  } = news;

  let day = "",
    month = "",
    year = "";
  if (createdAt) {
    const date = new Date(createdAt);
    day = date.getDate();
    month = date.toLocaleDateString("default", { month: "long" });
    year = date.getFullYear();
  }

  return (
    <div>
      <TopBar />
      <Navigation ad={headerAd} />

      {loading && (
        <div className="py-20 grid place-items-center">
          <Loader />
        </div>
      )}

      {!loading && Object.keys(news).length === 0 && <div></div>}

      {!loading && (
        <div>
          <div className="common-style py-10">
            <div className="common-style-2">
              {/* ======================= Ad Area ======================= */}
              {adBeforePost?.adBeforePostImage && (
                <div>
                  {adBeforePost.link ? (
                    <a
                      href={adBeforePost.link}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full"
                    >
                      <div className="w-full h-24">
                        <img
                          src={`${baseUrl}${adBeforePost.adBeforePostImage}`}
                          alt={adBeforePost.link}
                          className="w-full h-full"
                        />
                      </div>
                    </a>
                  ) : (
                    <div className="w-full h-24 relative">
                      <img
                        src={`${baseUrl}${adBeforePost.adBeforePostImage}`}
                        alt={adBeforePost.link}
                        className="w-full h-full"
                      />
                    </div>
                  )}
                </div>
              )}

              <div className="py-4">
                {news.title && (
                  <div className="space-y-4">
                    <div className="font-bold text-3xl lg:text-5xl text-gray-800 pt-3">
                      {title}
                    </div>

                    <div>
                      <img
                        src={`${baseUrl}${image}`}
                        alt={title}
                        className="w-full"
                      />

                      <div className="text-sm text-gray-700 flex items-center space-x-1 pt-2">
                        <AccessTimeIcon style={{ fontSize: "20px" }} />
                        <div className="flex justify-between w-full">
                          <div>{`${month} ${day}, ${year}`}</div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="text-justify text-2xl text-gray-700">
                        {parse(content || "")}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* ======================= Ad Area ======================= */}
              {adAfterPost?.adAfterPostImage && (
                <div>
                  {adAfterPost.link ? (
                    <a
                      href={adAfterPost.link}
                      rel="noreferrer"
                      target="_blank"
                      className="w-full"
                    >
                      <div className="w-full h-24">
                        <img
                          src={`${baseUrl}${adAfterPost.adAfterPostImage}`}
                          alt={adAfterPost.link}
                          className="w-full h-full"
                        />
                      </div>
                    </a>
                  ) : (
                    <div className="w-full h-24 relative">
                      <img
                        src={`${baseUrl}${adAfterPost.adAfterPostImage}`}
                        alt={adAfterPost.link}
                        className="w-full h-full"
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default News;
