import { createContext } from "react";

export const NewsContext = createContext({
  category: "Home",
  setCategory: () => {},
});
