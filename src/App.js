import React, { useState } from 'react';
import Navigation from './Components/Navigation/Navigation';
import News from './Components/News/News';
import { CategoryContext } from './context/CategoryContext'
function App() {
  const [category, setCategory] = useState('Home')
  return (
    <>
      <CategoryContext.Provider value={{ category, setCategory }}>
        <Navigation />

        <News />
      </CategoryContext.Provider>

    </>
  )
}

export default App;
