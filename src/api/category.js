import axios from "axios";

export const getCategories = async () => {
  let categories = [];

  await axios
    .get("/api/category")
    .then((res) => {
      categories = res?.data?.data?.categories;
    })
    .catch(() => {});

  return categories;
};
