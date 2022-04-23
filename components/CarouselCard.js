import React from 'react'

function CarouselCard({ styles }) {

    return(
        <div className={styles.carousel__card}>
            <div className={styles.carousel__card__svg}></div>
            <div className={styles.carousel__card__content}></div>
            <div className={styles.carousel__card__cta}></div>
        </div>
    )
}
export default CarouselCard