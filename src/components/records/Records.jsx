import React from 'react'
import { useSelector } from 'react-redux'
import { renderTime } from './Records.service'

import styles from './Records.module.scss'

function Records() {
    const { longestRide, longestRun } = useSelector(state => state.outdoorActivity)

    return (
        <div className={styles.records}>
            <p className={styles.title}>Longest ride:</p>
            <div className={styles.data}>
                <span>{longestRide?.date.month.slice(0, 3)} {longestRide?.date.day}</span>
                <span>{longestRide?.distance} km</span>
                <span>{renderTime(longestRide?.time)}</span>
            </div>

            <p className={styles.title}>Longest run:</p>
            <div className={styles.data}>
                <span>{longestRun?.date.month.slice(0, 3)} {longestRun?.date.day}</span>
                <span>{longestRun?.distance} km</span>
                <span>{renderTime(longestRun?.time)}</span>
            </div>
        </div>
    )
}

export default Records