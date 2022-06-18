import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import searchQuery from "../../utils/searchQuery";
import SearchResult from "./SearchResult";
import Navigation from "../static/Navigation";
import TopBar from "../static/TopBar";
import Footer from "../static/Footer";

const SearchPage = () => {
  const history = useRef();
  history.current = useHistory();
  const query = searchQuery();

  useEffect(() => {
    !query && history.current.push("/not-found");
  }, [query]);

  return (
    <div>
      <TopBar />
      <Navigation ad={{}} />

      <div>
        <SearchResult query={query} />
      </div>

      <Footer />
    </div>
  );
};

export default SearchPage;
