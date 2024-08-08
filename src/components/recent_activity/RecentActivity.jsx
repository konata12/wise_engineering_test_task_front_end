import React from 'react'

import styles from './RecentActivity.module.scss'

function RecentActivity({ date, activityType, distance, time, speed }) {
    return (
        <div className={styles.activity}>
            <span>{date}</span>
            <span>{activityType}</span>
            <span>{distance}</span>
            <span>{time}</span>
            <span>{speed}</span>
        </div>
    )
}

export default RecentActivity