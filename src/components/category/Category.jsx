import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MainPage from "../home/Mainpage";
import Container from "../../common/Container";
import CategoryContent from "./CategoryContent";
import { getTrendingNews } from "../../api/news";
import { ADD_TRENDING_NEWS_ACC_CATEGORY } from "../../store/actions/actionTypes";
import Loader from "../../common/loader";

const Category = (props) => {
  const dispatch = useRef();
  dispatch.current = useDispatch();
  const slug = props.match.params.slug.toLowerCase();
  const categories = useSelector((store) => store.categories);
  const storedNews = useSelector((store) => store.news);
  const categoryId = categories.find((c) => c.slug === slug)?._id;

  const isTrendingNewsAlreadyInRedux = storedNews[slug]?.trendingFetched;

  const news = isTrendingNewsAlreadyInRedux ? storedNews[slug].trending : [];

  useEffect(() => {
    const getCategoryNews = async () => {
      const { news } = await getTrendingNews(categoryId);

      dispatch.current({
        type: ADD_TRENDING_NEWS_ACC_CATEGORY,
        payload: {
          category: slug,
          news: news,
        },
      });
    };

    categoryId && !isTrendingNewsAlreadyInRedux && getCategoryNews();
  }, [categoryId, isTrendingNewsAlreadyInRedux, slug]);

  if (!categoryId) {
    return <div>No category found</div>;
  }

  if (!isTrendingNewsAlreadyInRedux) {
    return (
      <div className="py-20 grid place-items-center">
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <MainPage news={news} />
      <Container component={<CategoryContent categoryId={categoryId} />} />
    </div>
  );
};

export default Category;
