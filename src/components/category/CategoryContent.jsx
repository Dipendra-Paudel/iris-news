import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { getNews } from "../../api/news";
import CategoryNewsCard from "../../common/CategoryNewsCard";
import Loader from "../../common/loader";
import { AuthButton } from "../../common/button";

const CategoryContent = ({ categoryId }) => {
  const history = useRef();
  history.current = useHistory();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [nextPage, setNextPage] = useState(false);
  const [fetchingMore, setFetchingMore] = useState(false);

  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    return () => {
      setMounted(false);
    };
  }, []);

  useEffect(() => {
    const getNewsAsync = async () => {
      const { news, nextPage } = await getNews(categoryId, 10, page);
      if (mounted) {
        setNews((n) => (page > 1 ? [...n, ...news] : [...news]));
        setNextPage(nextPage);
        setLoading(false);
        setFetchingMore(false);
      }
    };

    (fetchingMore || loading) && getNewsAsync();
  }, [categoryId, page, loading, fetchingMore, mounted]);

  useEffect(() => {
    history.current.listen((l) => {
      setLoading(true);
    });
  }, []);

  if (loading) {
    return (
      <div className="py-20 grid place-items-center">
        <Loader />
      </div>
    );
  }

  return (
    <div>
      {news.length > 0 && (
        <div className="space-y-8">
          {news.map((n, index) => (
            <CategoryNewsCard key={index} {...n} />
          ))}
          {nextPage && (
            <form
              onSubmit={(event) => {
                event.preventDefault();
                setFetchingMore(true);
                setPage(page + 1);
              }}
              className="mt-8 w-full md:w-40 md:mx-auto"
            >
              <AuthButton label="More News" submitting={fetchingMore} />
            </form>
          )}
        </div>
      )}

      {news.length === 0 && (
        <div className="text-2xl">No news found in this category</div>
      )}
    </div>
  );
};

export default CategoryContent;
