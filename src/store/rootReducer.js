import { combineReducers } from "redux";
import categoryReducer from "./reducers/category";
import newsReducer from "./reducers/news";
import trendingNewsReducer from "./reducers/trendingNews";

const rootReducer = combineReducers({
  categories: categoryReducer,
  trendingNews: trendingNewsReducer,
  news: newsReducer,
});

export default rootReducer;
