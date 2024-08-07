import React from 'react'

import styles from './TrackerForm.module.scss'

function TrackerForm() {
    return (
        <form className={styles.tracker_form}>
            <span className={styles.title}>Add new activity:</span>

            <input type="text" placeholder='Start time' />
            <input type="text" placeholder='Finish time' />
            <input type="text" placeholder='Distance' />

            <select placeholder='select activity type' >

            </select>

            <button>Save</button>
        </form>
    )
}

export default TrackerForm