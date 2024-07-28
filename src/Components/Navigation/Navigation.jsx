import React, { useContext } from 'react'
import style from './Navigation.module.css'
import logo from '../../assets/logo/news-logo.png'
import { CategoryContext } from '../../context/CategoryContext'

function Navigation() {
    const categorize = ['Home', 'General', 'Bussiness', 'Sports', 'Science', 'Health', 'Entertainment', 'Technology']
    const { setCategory } = useContext(CategoryContext)

    function CategoryClickHandler(index) {
        setCategory(categorize[index])
    }
    return (

        <div className={style.navbar}>
            <div className={style.logo}>
                <img src={logo} alt='News Logo' />
                <span>My News</span>
            </div>
            <ul className={style.categories}>
                {categorize.map((item, index) => {
                    return <li key={index} onClick={() => CategoryClickHandler(index)}>{item}</li>
                })}
            </ul>
            <div className={style.search}>
                <input type="text" placeholder='Explore News' />
                <button>Search</button>
            </div>
        </div>
    )
}

export default Navigation