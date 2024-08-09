export const renderTime = (time) => {
    if (!time?.hours) {
        return <span>{time?.minutes} m</span>
    } else if (!time?.minutes) {
        return <span>{time?.hours} h</span>
    } else {
        return <span>{time?.hours} h {time?.minutes} m</span>
    }
}