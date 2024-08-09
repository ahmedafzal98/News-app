import { useContext, useEffect, useState } from "react";
import FetchData from "../services/api";
import { CategoryContext } from "../context/CategoryContext";
import { debounce } from "lodash";

export const useFetch = (
  initialEndpoint = "top-headlines?category=",
  initialCountryCode = ""
) => {
  const [endpoint, setEndpoint] = useState(initialEndpoint);
  // const [articles, setArticles] = useState([]);
  const [countryCode, setCountryCode] = useState(initialCountryCode);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { setNews } = useContext(CategoryContext);
  const getData = debounce(async () => {
    console.log("Loading", loading);

    try {
      if (!endpoint) {
        return;
      }
      setLoading(true);
      const result = await FetchData(endpoint, countryCode);
      if (result && Array.isArray(result.articles)) {
        // setArticles(result.articles);
        setNews(result.articles);
        setError(null);
      } else {
        setNews([]);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, 300);
  useEffect(() => {
    getData();
  }, [endpoint, countryCode]);

  return {
    error,
    loading,
    setCountryCode,
    setEndpoint,
  };
};
