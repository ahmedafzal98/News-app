import { createContext } from "react";

export const CategoryContext = createContext({
    category: 'Home',
    setCategory: () => { }
})