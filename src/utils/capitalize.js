const capitalize = (word) => {
  if (!word) {
    return "";
  }
  const result = word
    .match(/\S+/gi)
    .map((w) => w[0].toUpperCase() + (w.length > 1 ? w.slice(1, w.length) : ""))
    .join(" ");

  return result;
};

export default capitalize;
