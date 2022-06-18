import axios from "axios";

export const getAd = async (slug) => {
  let result = {};

  await axios
    .post(`/ads/individual-ad`, { slug })
    .then((res) => {
      const { status, data } = res.data;
      result.status = status;
      if (status === "success") {
        result.ad = data.ad;
      }
    })
    .catch(() => (result.status = "fail"));

  return result;
};
