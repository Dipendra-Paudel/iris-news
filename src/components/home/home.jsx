import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainPage from "./Mainpage";
import Content from "./Content";
import Container from "../../common/Container";
import { getTrendingNews } from "../../api/news";
import { ADD_TRENDING_NEWS } from "../../store/actions/actionTypes";
import Loader from "../../common/loader";

const Home = () => {
  const dispatch = useRef();
  dispatch.current = useDispatch();
  const storedTrendingNews = useSelector((store) => store.trendingNews);

  const [trendingNews, setTrendingNews] = useState(() =>
    storedTrendingNews && storedTrendingNews.length > 0
      ? storedTrendingNews
      : []
  );

  console.log(trendingNews);

  const newsLength = trendingNews.length;
  const [loading, setLoading] = useState(() => newsLength === 0);

  useEffect(() => {
    const getNews = async () => {
      const { news } = await getTrendingNews("", 4);
      setTrendingNews(news);

      if (news.length > 0) {
        dispatch.current({
          type: ADD_TRENDING_NEWS,
          payload: {
            news,
          },
        });
      }
      setLoading(false);
    };

    newsLength === 0 && getNews();
  }, [newsLength]);

  if (loading) {
    return (
      <div className="py-20 grid place-items-center">
        <Loader />
      </div>
    );
  }

  return (
    <div>
      {trendingNews.length > 0 && <MainPage news={trendingNews} />}
      <Container component={<Content />} />
    </div>
  );
};

export default Home;
