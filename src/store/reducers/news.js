import {
  ADD_NEWS,
  ADD_TRENDING_NEWS_ACC_CATEGORY,
} from "../actions/actionTypes";

const newsReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_NEWS: {
      const { category } = payload;
      return {
        ...state,
        [category]: {},
      };
    }

    case ADD_TRENDING_NEWS_ACC_CATEGORY: {
      const { category, news } = payload;
      return {
        ...state,
        [category]: {
          trendingFetched: true,
          trending: [...news],
        },
      };
    }

    default: {
      return state;
    }
  }
};

export default newsReducer;
