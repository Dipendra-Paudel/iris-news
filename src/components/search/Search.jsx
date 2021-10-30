import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import searchQuery from "../../utils/searchQuery";
import SearchResult from "./SearchResult";

const SearchPage = () => {
  const history = useRef();
  history.current = useHistory();
  const query = searchQuery();

  useEffect(() => {
    !query && history.current.push("/not-found");
  }, [query]);

  return (
    <div>
      <SearchResult query={query} />
    </div>
  );
};

export default SearchPage;
