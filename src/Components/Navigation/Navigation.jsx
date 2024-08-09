import React, { useContext, useEffect, useState } from "react";
import style from "./Navigation.module.css";
import logo from "../../assets/logo/news-logo.png";
import { CategoryContext } from "../../context/CategoryContext";
import { useFetch } from "../../hooks/useFetch";

function Navigation() {
  const categorize = [
    "Home",
    "General",
    "Bussiness",
    "Sports",
    "Science",
    "Health",
    "Entertainment",
    "Technology",
  ];
  const [searchContent, setSearchContent] = useState("");
  const { setCategory, category } = useContext(CategoryContext);
  const { setEndpoint } = useFetch("");

  function CategoryClickHandler(index) {
    setCategory(categorize[index]);
  }

  useEffect(() => {
    console.log("Useeffect", category);

    setEndpoint(`search?q=${category}`);
  }, [setEndpoint, category]);

  const HandleSearchClick = async () => {
    setEndpoint(`search?q=${searchContent}`);
    setSearchContent("");
  };
  return (
    <div className={style.navbar}>
      <div className={style.logo}>
        <img src={logo} alt="News Logo" />
        <span>My News</span>
      </div>
      <ul className={style.categories}>
        {categorize.map((item, index) => {
          return (
            <li key={index} onClick={() => CategoryClickHandler(index)}>
              {item}
            </li>
          );
        })}
      </ul>
      <div className={style.search}>
        <input
          type="text"
          onChange={(e) => setSearchContent(e.target.value)}
          value={searchContent}
          placeholder="Explore News"
        />
        <button onClick={HandleSearchClick}>Search</button>
      </div>
    </div>
  );
}

export default Navigation;
