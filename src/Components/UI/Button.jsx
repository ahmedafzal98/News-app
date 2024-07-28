import React from 'react'
import style from './Button.module.css'

function Button({ url }) {
    return (
        <a className={style.button} role="button" href={url} target="_blank" rel='noreferrer'>Read more <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="arrow-icon"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg></a>
    )
}
export default Button