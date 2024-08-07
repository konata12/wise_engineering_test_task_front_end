import React from 'react'

import styles from './RecentActivity.module.scss'

function RecentActivity() {
    return (
        <div className={styles.activity}>
            <span>Date</span>
            <span>activityType</span>
            <span>distance</span>
            <span>time</span>
            <span>speed</span>
        </div>
    )
}

export default RecentActivity