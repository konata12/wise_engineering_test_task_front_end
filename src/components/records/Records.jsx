import React from 'react'

import styles from './Records.module.scss'

function Records() {
    return (
        <div className={styles.records}>
            <p className={styles.title}>Longest ride:</p>
            <div className={styles.data}>
                <span>date</span>
                <span>distance</span>
                <span>time</span>
            </div>

            <p className={styles.title}>Longest run:</p>
            <div className={styles.data}>
                <span>date</span>
                <span>distance</span>
                <span>time</span>
            </div>
        </div>
    )
}

export default Records