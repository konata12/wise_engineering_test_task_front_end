export const renderTime = (time) => {
    if (!time?.hours) {
        return <span>{time?.minutes} m</span>
    } else if (!time?.minutes) {
        return <span>{time?.hours} h</span>
    } else {
        return <span>{time?.hours} h {time?.minutes} m</span>
    }
}

export const renderActivityRecordData = (data, activity, styles) => {
    if (data === null) {
        return <p className={styles.no_activity_data}>There aren't {activity}s yet</p>
    } else {
        return <div className={styles.data}>
            <span>{data?.date.month.slice(0, 3)} {data?.date.day}</span>
            <span>{data?.distance} km</span>
            <span>{renderTime(data?.time)}</span>
        </div>
    }
}