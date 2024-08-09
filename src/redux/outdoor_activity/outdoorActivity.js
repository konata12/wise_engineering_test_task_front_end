import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

const initialState = {
    activities: null,
    longestRun: null,
    longestRide: null,
    totalRunDistance: null,
    totalRideDistance: null,

    trackerData: null,
    loading: false,
    message: null,
}

export const getOutdoorActivities = createAsyncThunk(
    'outdoorActivity/getOutdoorActivities',
    async () => {
        try {
            const { data } = await axios.get('/outdoor-activity')

            return data
        } catch (error) {
            console.log(error)
            return isRejectedWithValue(error.response.data)
        }
    }
)

export const postOutdoorActivity = createAsyncThunk(
    'outdoorActivity/postOutdoorActivity',
    async (data) => {
        try {
            const reqData = {
                startTime: data.startTime,
                finishTime: data.finishTime,
                activityDistance: +data.distance,
                activityType: data.activityType,
            }
            console.log(reqData)
            const { resData } = await axios.post('/outdoor-activity', reqData)
            console.log(123, data)
            console.log(resData)
            return resData
        } catch (error) {
            console.log(error)
        }
    }
)

const outdoorActivitySlice = createSlice({
    name: 'outdoorActivity',
    initialState,
    reducers: {
        setTrackerData: (state, action) => {
            state.data = action.payload;
        }
    },
    extraReducers(builder) {
        builder
            // get all activities
            .addCase(getOutdoorActivities.pending, (state) => {
                state.loading = true
            })
            .addCase(getOutdoorActivities.fulfilled, (state, action) => {
                state.loading = false
                state.activities = action.payload?.activities
                state.longestRun = action.payload?.longestRun
                state.longestRide = action.payload?.longestRide
                state.totalRunDistance = action.payload?.totalRunDistance
                state.totalRideDistance = action.payload?.totalRideDistance
            })
            .addCase(getOutdoorActivities.rejected, (state, action) => {
                state.loading = false
                state.message = action.payload?.message
                state.activities = null
                state.longestRun = null
                state.longestRide = null
                state.totalRunDistance = null
                state.totalRideDistance = null
            })

            // post activity
            .addCase(postOutdoorActivity.pending, (state) => {
                state.loading = true
            })
            .addCase(postOutdoorActivity.fulfilled, (state, action) => {
                state.loading = false
            })
            .addCase(postOutdoorActivity.rejected, (state, action) => {
                state.loading = false
            })
    }
})

export const { setTrackerData } = outdoorActivitySlice.actions;
export default outdoorActivitySlice.reducer