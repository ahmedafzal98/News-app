import React, { useContext } from "react";
import NewsItem from "../NewsItem/NewsItem";
import style from "./News.module.css";
import { useFetch } from "../../hooks/useFetch";
import Loader from "../UI/Loader";
import { CategoryContext } from "../../context/CategoryContext";
import countries from "../../data/country.json";

function News() {
  const { category, news } = useContext(CategoryContext);
  const { loading, error, setCountryCode } = useFetch(
    `top-headlines?category=${category}`
  );

  function HandleCountrySelect(event) {
    setCountryCode(event.target.value);
  }
  return (
    <>
      <select onChange={HandleCountrySelect}>
        {countries.map((country) => {
          return (
            <option key={country.code} value={country.code.toLowerCase()}>
              {country.name}
            </option>
          );
        })}
      </select>
      <div className={style.card_container}>
        {loading && <Loader />}
        {error && <p>{error}</p>}
        {news.length > 0 &&
          news.map((article, index) => (
            <NewsItem key={index} articles={article} />
          ))}
      </div>
    </>
  );
}

export default News;
