import React from 'react'
import { renderTime } from './RecentActivity.service'

import styles from './RecentActivity.module.scss'

function RecentActivity({ date, activityType, distance, time, speed }) {
    return (
        <div className={styles.activity}>
            <span>{date.month} {date.day}</span>
            <span>{activityType}</span>
            <span>{distance} km</span>
            {renderTime(time)}
            <span>{speed} km / hour</span>
        </div>
    )
}

export default RecentActivity