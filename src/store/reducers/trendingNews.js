import { ADD_TRENDING_NEWS } from "../actions/actionTypes";

const trendingNewsReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TRENDING_NEWS: {
      return [...payload.news];
    }

    default: {
      return state;
    }
  }
};

export default trendingNewsReducer;
