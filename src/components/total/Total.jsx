import React from 'react'
import { useSelector } from 'react-redux'

import styles from './Total.module.scss'

function Total() {
    const { totalRideDistance, totalRunDistance } = useSelector(state => state.outdoorActivity)

    return (
        <div className={styles.total}>
            <div className={styles.data}>
                <span>Total ride distance:</span>
                <span>{totalRideDistance} km</span>
            </div>

            <div className={styles.data}>
                <span>Total run distance:</span>
                <span>{totalRunDistance} km</span>
            </div>
        </div>
    )
}

export default Total