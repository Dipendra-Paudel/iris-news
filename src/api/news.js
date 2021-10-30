export const getTrendingNews = async (category = "", limit = 4, page = 1) => {
  let result = {
    news: [],
    nextPage: false,
  };
  await fetch(
    `/api/news/trending?category=${category}&limit=${limit}&page=${page}`,
    {
      method: "GET",
    }
  )
    .then(async (res) => {
      const { status, data } = await res.json();
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
  await fetch(`/api/news?category=${category}&limit=${limit}&page=${page}`)
    .then(async (res) => {
      const { status, data } = await res.json();
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

  await fetch(`/api/news/search?value=${value}&limit=${limit}&page=${page}`)
    .then(async (res) => {
      const { status, data } = await res.json();
      if (status === "success") {
        const { news, nextPage } = data;
        result = {
          news,
          nextPage,
        };
      }
    })
    .catch(() => {});

  return result;
};

export const getIndividualNews = async (slug) => {
  let news = null;
  await fetch(`/api/news/${slug}`)
    .then(async (res) => {
      const { status, data } = await res.json();
      if (status === "success") {
        news = { ...data.news };
      }
    })
    .catch(() => {});

  return news;
};
