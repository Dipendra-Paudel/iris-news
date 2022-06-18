import axios from "axios";

export const getTrendingNews = async (category = "", limit = 4, page = 1) => {
  let result = {
    news: [],
    nextPage: false,
  };

  await axios
    .get(`/api/news/trending?category=${category}&limit=${limit}&page=${page}`)
    .then((res) => {
      const { status, data } = res.data;
      if (status === "success") {
        result = {
          news: data.newsList,
          nextPage: data.nextPage,
        };
      }
    })
    .catch(() => {});

  return result;
};

export const getNews = async (category = "", limit = 4, page = 1) => {
  let result = {
    news: [],
    nextPage: false,
  };

  await axios
    .get(`/api/news?category=${category}&limit=${limit}&page=${page}`)
    .then((res) => {
      const { status, data } = res.data;
      if (status === "success") {
        result = {
          news: data.newsList,
          nextPage: data.nextPage,
        };
      }
    })
    .catch(() => {});

  return result;
};

export const searchNews = async (value, limit = 8, page = 1) => {
  let result = {
    news: [],
    nextPage: false,
  };

  await axios
    .get(`/api/news/search?value=${value}&limit=${limit}&page=${page}`)
    .then((res) => {
      const { status, data } = res.data;
      if (status === "success") {
        result = {
          news: data.news,
          nextPage: data.nextPage,
        };
      }
    })
    .catch(() => {});

  return result;
};

export const getIndividualNews = async (id) => {
  let news = null;

  await axios
    .get(`/api/news/${id}`)
    .then((res) => {
      const { status, data } = res.data;
      if (status === "success") {
        news = { ...data.news };
      }
    })
    .catch(() => {});

  return news;
};
