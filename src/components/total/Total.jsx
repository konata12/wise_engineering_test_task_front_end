import React from 'react'

import styles from './Total.module.scss'
import { useSelector } from 'react-redux'

function Total() {
    const { totalRideDistance, totalRunDistance } = useSelector(state => state.outdoorActivity)

    return (
        <div className={styles.total}>
            <div className={styles.data}>
                <span>Total ride distance:</span>
                <span>{totalRideDistance} km</span>
            </div>

            <div className={styles.data}>
                <span>Total ride distance:</span>
                <span>{totalRunDistance} km</span>
            </div>
        </div>
    )
}

export default Total