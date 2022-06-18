import React, { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MainPage from "../home/Mainpage";
import Container from "../../common/Container";
import CategoryContent from "./CategoryContent";
import Navigation from "../static/Navigation";
import TopBar from "../static/TopBar";
import Footer from "../static/Footer";
import { getTrendingNews } from "../../api/news";
import { ADD_TRENDING_NEWS_ACC_CATEGORY } from "../../store/actions/actionTypes";
import Loader from "../../common/loader";
import { getAd } from "../../api/ads";

const Category = (props) => {
  const dispatch = useRef();
  dispatch.current = useDispatch();
  const id = props.match.params.id.toLowerCase();
  const categories = useSelector((store) => store.categories);
  const storedNews = useSelector((store) => store.news);
  const activeCategory = categories.find((c) => c._id === id);

  const { _id: categoryId, slug } = activeCategory || {};

  const [ads, setAds] = useState({});

  const isTrendingNewsAlreadyInRedux = storedNews[id]?.trendingFetched;

  const news = isTrendingNewsAlreadyInRedux ? storedNews[id].trending : [];

  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    return () => {
      setMounted(false);
    };
  }, []);

  useEffect(() => {
    const getCategoryNews = async () => {
      const { news } = await getTrendingNews(categoryId);

      if (mounted) {
        dispatch.current({
          type: ADD_TRENDING_NEWS_ACC_CATEGORY,
          payload: {
            category: id,
            news: news,
          },
        });
      }
    };

    categoryId && !isTrendingNewsAlreadyInRedux && getCategoryNews();
  }, [categoryId, isTrendingNewsAlreadyInRedux, id, mounted]);

  useEffect(() => {
    setAds({});
    const getAds = async () => {
      const { status, ad } = await getAd(slug);
      if (status === "success" && mounted) {
        setAds(ad);
      }
    };

    getAds();

    // eslint-disable-next-line
  }, [categoryId, mounted]);

  const { headerAd, heroSectionAd, categoryAds } = ads;

  if (!categoryId) {
    return <div>No category found</div>;
  }

  return (
    <div>
      <TopBar />
      <Navigation ad={headerAd} />

      {!isTrendingNewsAlreadyInRedux && (
        <div className="py-20 grid place-items-center">
          <Loader />
        </div>
      )}

      {isTrendingNewsAlreadyInRedux && (
        <div>
          <MainPage news={news} ad={heroSectionAd} />
          <Container
            ads={categoryAds}
            component={<CategoryContent categoryId={categoryId} />}
          />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Category;
