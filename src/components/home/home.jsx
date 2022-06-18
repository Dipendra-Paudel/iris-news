import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainPage from "./Mainpage";
import Content from "./Content";
import Container from "../../common/Container";
import Navigation from "../static/Navigation";
import TopBar from "../static/TopBar";
import Footer from "../static/Footer";
import { getTrendingNews } from "../../api/news";
import { ADD_TRENDING_NEWS } from "../../store/actions/actionTypes";
import Loader from "../../common/loader";
import { getAd } from "../../api/ads";

const Home = () => {
  const dispatch = useRef();
  dispatch.current = useDispatch();
  const storedTrendingNews = useSelector((store) => store.trendingNews);

  const [ads, setAds] = useState({});

  const [trendingNews, setTrendingNews] = useState(() =>
    storedTrendingNews && storedTrendingNews.length > 0
      ? storedTrendingNews
      : []
  );

  const newsLength = trendingNews.length;
  const [loading, setLoading] = useState(() => newsLength === 0);

  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    return () => {
      setMounted(false);
    };
  }, []);

  useEffect(() => {
    const getNews = async () => {
      const { news } = await getTrendingNews("", 4);
      setTrendingNews(news);

      if (news.length > 0 && mounted) {
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
  }, [newsLength, mounted]);

  useEffect(() => {
    const getAds = async () => {
      const { status, ad } = await getAd("home");
      if (status === "success" && mounted) {
        setAds(ad);
      }
    };

    getAds();
  }, [mounted]);

  const { heroSectionAd, headerAd, categoryAds } = ads;

  return (
    <div>
      <TopBar />
      <Navigation ad={headerAd} />

      {loading && (
        <div className="py-20 grid place-items-center">
          <Loader />
        </div>
      )}

      {!loading && (
        <div>
          {<MainPage news={trendingNews} ad={heroSectionAd} />}
          <Container ads={categoryAds} component={<Content />} />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Home;
