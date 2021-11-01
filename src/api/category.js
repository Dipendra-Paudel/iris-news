import { baseUrl } from "../components/auth/auth";

export const getCategories = async () => {
  let categories;
  await fetch(`${baseUrl}/api/category`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(async (res) => {
      const { data } = await res.json();
      data && (categories = data.categories);
    })
    .catch(() => {});

  return categories;
};
