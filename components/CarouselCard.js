import React from 'react'
import Link from 'next/link'

function CarouselCard({ styles, svg, title, ul }) {

    return(
        <div className={styles.card}>
            <div className={styles.card__svg}>{svg}</div>
            <div className={styles.card__content}>
                <h3>{title}</h3>
                <ul>
                {
                    ul.map(elem => {
                        return(
                        <li key={ul.indexOf(elem)}>{elem}</li>
                        )
                    })
                }
                </ul>
            </div>
            <Link href='/'>
                <a className={styles.card__cta}>Learn More<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill='#fff'><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path></svg></a>
            </Link>
        </div>
    )
}
export default CarouselCard