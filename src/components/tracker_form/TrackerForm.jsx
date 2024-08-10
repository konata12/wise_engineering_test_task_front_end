import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { postOutdoorActivity, setTrackerData } from '../../redux/outdoor_activity/outdoorActivity'
import { createRegisterOptions, validateTime } from './TrackerForm.service'

import styles from './TrackerForm.module.scss'

function TrackerForm({ formSubmissinTracker }) {
    const [finishTimeBiggerThanStart, setFinishTimeBiggerThanStart] = useState(true)
    const dispatch = useDispatch()
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors }
    } = useForm({
        defaultValues: {
            activityType: ''
        }
    })
    const [startTimeValue, finishTimeValue] = watch(['startTime', 'finishTime'])

    const onSubmit = async (data) => {
        const startDate = Date.parse(`2000-01-01T${data.startTime}:00`)
        const finishDate = Date.parse(`2000-01-01T${data.finishTime}:00`)
        const totalTime = finishDate - startDate
        if (totalTime > 0) {
            await dispatch(postOutdoorActivity(data))
            dispatch(setTrackerData(!formSubmissinTracker))
            setFinishTimeBiggerThanStart(true)
        } else {
            setFinishTimeBiggerThanStart(false)
        }
    }

    const handleChange = (e) => {
        let { name, value } = e.target

        if (value.length > 2 && value[2] !== ':') {
            value = value.slice(0, 2) + ':' + value.slice(2)
        }

        if (value.length > 5) {
            value = value.slice(0, 5)
        }

        setValue(name, value)
    }

    return (
        <div className={styles.form_container}>
            <form
                className={styles.tracker_form}
                onSubmit={handleSubmit(onSubmit)}
            >
                <span className={styles.title}>Add new activity:</span>

                <input {...register('startTime', createRegisterOptions('Start', validateTime))}
                    value={startTimeValue || ''}
                    onChange={handleChange}
                    type='text'
                    placeholder='Start time' />

                <input {...register('finishTime', createRegisterOptions('Finish', validateTime))}
                    value={finishTimeValue || ''}
                    onChange={handleChange}
                    type='text'
                    placeholder='Finish time' />

                <input {...register('distance', {
                    min: 0
                })}
                    type='number'
                    placeholder='Distance' />

                <select
                    {...register('activityType', {
                        required: 'Activity type is required',
                        validate: value => value !== '' || 'Please select an option'
                    })}
                >
                    <option value="" disabled>Select activity type</option>
                    <option value="run">Run</option>
                    <option value="ride">Ride</option>
                </select>

                <button type='submit'>Save</button>
            </form>
            <div className={styles.error_container}>
                {
                    Object.entries(errors).map((error, i) => {
                        return <p key={i}>{error[1].message}</p>
                    })
                }
                {
                    finishTimeBiggerThanStart || <p>Finish time should be bigger than start time</p>
                }
            </div>
        </div>
    )
}

export default TrackerForm