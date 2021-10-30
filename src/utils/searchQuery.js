const searchQuery = () => {
  const queryArr = window.location.href.split("/search?value=");
  const searchQuery = Array.isArray(queryArr) && queryArr[1];
  return searchQuery ? searchQuery : "";
};

export default searchQuery;
