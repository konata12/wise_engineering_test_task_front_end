export const renderTime = (time) => {
    if (!time.hours) {
        return time.minutes === 1 ?
        <span>{time.minutes} minute</span> :
        <span>{time.minutes} minutes</span>
    } else if (!time.minutes) {
        return time.hours === 1?
        <span>{time.hours} hour</span> :
        <span>{time.hours} hours</span>
    } else {
        return <span>{time.hours} h {time.minutes} m</span>
    }
}