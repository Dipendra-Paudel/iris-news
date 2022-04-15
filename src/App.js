import React, { useEffect, useRef, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import Navigation from "./components/static/Navigation";
import TopBar from "./components/static/TopBar";
import Home from "./components/home/home";
import Category from "./components/category/Category";
import Footer from "./components/static/Footer";
import { getCategories } from "./api/category";
import News from "./components/news/News";
import { ADD_CATEGORY } from "./store/actions/actionTypes";
import NotFound from "./components/NotFound";
import Loader from "./common/loader";
import SearchPage from "./components/search/Search";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [loadingErr, setLoadingErr] = useState(false);
  const dispatch = useRef();
  dispatch.current = useDispatch();

  useEffect(() => {
    const getAllCategories = async () => {
      // Call the api to get all the categories
      const categories = await getCategories();
      console.log(categories);

      // When there are categories
      if (categories && categories.length > 0) {
        dispatch.current({
          type: ADD_CATEGORY,
          payload: {
            categories,
          },
        });

        // When there are no categories or could not connect to the server show error message
      } else {
        setLoadingErr(true);
      }

      setLoading(false);
    };

    getAllCategories();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen grid place-items-center bg-gray-100">
        <Loader />
      </div>
    );
  } else if (loadingErr) {
    return (
      <div className="p-4">
        We could not connect to the server. Please try again later
      </div>
    );
  }

  return (
    <div>
      <TopBar />
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/not-found" component={NotFound} />
        <Route exact path="/category/:slug" component={Category} />
        <Route exact path="/news/:slug" component={News} />
        <Route exact path="/search" component={SearchPage} />
        <Redirect to="/not-found" />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
