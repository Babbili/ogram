import React from 'react'
import styles from '../styles/Home.module.css'
import CarouselCard from './CarouselCard'

function Carousel() {

    const cards = [
        [
            
        ]
    ]

    return(
        <section className={styles.carousel}>
            <div className={styles.carousel__title}>
                <h2>Industries we are serving</h2>
                <p>We have tens of thousands of pre-qualified workers ready to go.</p>
            </div>
            <div className={styles.carousel__wrap}>
                <CarouselCard styles={styles} />
            </div>
        </section>
    )
}
export default Carousel