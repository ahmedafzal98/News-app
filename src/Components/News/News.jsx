import React, { useContext, useEffect, useState } from 'react'
import NewsItem from '../NewsItem/NewsItem'
import style from './News.module.css'
import { useFetch } from '../../hooks/useFetch';
import Loader from '../UI/Loader';
import { CategoryContext } from '../../context/CategoryContext';

function News() {
    const { category } = useContext(CategoryContext)

    const { articles, error, loading } = useFetch(category)

    console.log('Articless:', articles);
    return (
        <div className={style.card_container}>
            {loading && <Loader />}
            {error && <p>{error}</p>}
            {articles.length > 0 && articles.map((article, index) => (
                <NewsItem key={index} articles={article} />
            ))}
        </div>
    )
}

export default News