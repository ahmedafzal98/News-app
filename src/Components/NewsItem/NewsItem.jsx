import React from 'react'
import style from './NewsItem.module.css'
import Button from '../UI/Button'

function NewsItem({ articles }) {

    return (
        <>
            <div className={style.card}>
                <div className={style.bg_image}>
                    <img src={articles.image} alt='bg_image' />
                </div>
                <div className={style.card_body}>
                    <div className={style.headline}>
                        <span>{articles.title}</span>
                    </div>
                    <div className={style.content}>
                        <span>{articles.content}</span>
                    </div>
                    <details>
                        <summary className={style.summary}>Channel and PublishedAt</summary>

                        <a className={style.channel} href={articles.source.url} target="_blank"><p><span>Channel: </span>{articles.source.name}</p></a>
                        <p className={style.published}><span>Published at: </span>{articles.publishedAt}</p>

                    </details>

                    <Button url={articles.url} />
                </div>


            </div>


        </>
    )
}
export default NewsItem