import React from 'react'
import { useSelector } from 'react-redux'
import { renderActivityRecordData } from './Records.service'

import styles from './Records.module.scss'

function Records() {
    const { longestRide, longestRun } = useSelector(state => state.outdoorActivity)

    return (
        <div className={styles.records}>
            <p className={styles.title}>Longest ride:</p>
            {renderActivityRecordData(longestRide, 'ride', styles)}

            <p className={styles.title}>Longest run:</p>
            {renderActivityRecordData(longestRun, 'run', styles)}
        </div>
    )
}

export default Records