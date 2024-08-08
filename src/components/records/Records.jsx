import React from 'react'

import styles from './Records.module.scss'
import { useSelector } from 'react-redux'

function Records() {
    const { longestRide, longestRun } = useSelector(state => state.outdoorActivity)

    return (
        <div className={styles.records}>
            <p className={styles.title}>Longest ride:</p>
            <div className={styles.data}>
                <span>{longestRide.date}</span>
                <span>{longestRide.activityDistance}</span>
                <span>{longestRide.time}</span>
            </div>

            <p className={styles.title}>Longest run:</p>
            <div className={styles.data}>
                <span>{longestRun.date}</span>
                <span>{longestRun.activityDistance}</span>
                <span>{longestRun.time}</span>
            </div>
        </div>
    )
}

export default Records