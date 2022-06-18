import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getNews } from "../../api/news";
import HomePageNewsCard from "../../common/HomepageNewsCard";
import Loader from "../../common/loader";
import { ADD_NEWS } from "../../store/actions/actionTypes";
import capitalize from "../../utils/capitalize";

const HomeNewsContainer = ({ _id, categoryName, trendingNews = [] }) => {
  const [news, setNews] = useState([]);
  const fetch = trendingNews.length > 0;
  const [loading, setLoading] = useState(!fetch);
  const dispatch = useRef();
  dispatch.current = useDispatch();

  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    return () => {
      setMounted(false);
    };
  }, []);

  useEffect(() => {
    const getNewsAsync = async () => {
      const { news } = await getNews(_id, 2, 1);
      if (mounted) {
        setNews(news);
        if (news.length > 0) {
          dispatch.current({
            type: ADD_NEWS,
            payload: {
              category: _id.split("-").join(""),
              news,
            },
          });
        }
        setLoading(false);
      }
    };

    !fetch && getNewsAsync();
  }, [_id, fetch, mounted]);

  if (loading) {
    return (
      <div className="py-20 grid place-items-center">
        <Loader />
      </div>
    );
  } else if (trendingNews.length === 0 && news.length === 0) {
    return <></>;
  }

  return (
    <div>
      <div className="heading-1 mb-4">{capitalize(categoryName)}</div>
      <div className="grid md:grid-cols-2 gap-4">
        {(fetch ? trendingNews : news).map((news, index) => (
          <HomePageNewsCard key={index} {...news} />
        ))}
      </div>
      <div className="pt-6">
        <Link
          to={fetch ? "/trending" : `/category/${_id}`}
          onClick={() => window.scrollTo(0, 0)}
          className="border text-gray-600 font-semibold border-gray-300 text-center hover:text-blue-600 w-full block py-3"
        >
          Load More
        </Link>
      </div>
    </div>
  );
};

export default HomeNewsContainer;
