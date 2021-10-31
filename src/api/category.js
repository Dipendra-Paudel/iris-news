export const getCategories = async () => {
  let categories;
  await fetch("https://pacific-hamlet-93409.herokuapp.com/api/category", {
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
