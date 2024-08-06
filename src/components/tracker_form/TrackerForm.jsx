import React from 'react'

function TrackerForm() {
    return (
        <form>
            <span>Add new activity</span>
            
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