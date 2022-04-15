import React, { useEffect, useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import parse from "html-react-parser";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { getIndividualNews } from "../../api/news";
import Loader from "../../common/loader";
import capitalize from "../../utils/capitalize";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

const News = (props) => {
  const history = useRef();
  history.current = useHistory();
  const slug = props.match.params.slug.toLowerCase();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const asyncIndividualNews = async () => {
      const news = await getIndividualNews(slug);
      setNews(news);
      setLoading(false);
    };

    loading && asyncIndividualNews();
  }, [loading, slug]);

  useEffect(() => {
    !news && !loading && history.current.push("/not-found");
  }, [news, loading]);

  if (loading) {
    return (
      <div className="py-20 grid place-items-center">
        <Loader />
      </div>
    );
  }

  if (!news) {
    return <div></div>;
  }

  const { title, image, createdAt, content } = news;

  const date = new Date(createdAt);
  const day = date.getDate();
  const month = date.toLocaleDateString("default", { month: "long" });
  const year = date.getFullYear();

  return (
    <div className="common-style py-10">
      <div className="common-style-2">
        <div className="space-y-4">
          <div>
            <img src={`${baseUrl}${image}`} alt={title} className="w-full" />

            <div className="text-sm text-gray-700 flex items-center space-x-1 pt-2">
              <AccessTimeIcon style={{ fontSize: "20px" }} />
              <div className="flex justify-between w-full">
                <div>{`${month} ${day}, ${year}`}</div>
              </div>
            </div>

            <div className="font-bold text-3xl text-gray-800 pt-3">
              {capitalize(title)}
            </div>
          </div>
          <div>
            <div className="text-justify">{parse(content)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
