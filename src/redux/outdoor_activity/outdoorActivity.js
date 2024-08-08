import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

const initialState = {
    activities: null,
    longestRun: null,
    longestRide: null,
    totalRunDistance: null,
    totalRideDistance: null,
    loading: false
}

export const getOutdoorActivities = createAsyncThunk(
    'outdoorActivity/getOutdoorActivities',
    async () => {
        try {
            const { data } = await axios.get('/outdoor-activity')
            console.log(data)

            return data
        } catch (error) {

        }
    }
)

export const postOutdoorActivity = createAsyncThunk(
    'outdoorActivity/postOutdoorActivity',
    async () => {
        try {

        } catch (error) {

        }
    }
)

const outdoorActivitySlice = createSlice({
    name: 'outdoorActivity',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
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
                state.activities = null
                state.longestRun = null
                state.longestRide = null
                state.totalRunDistance = null
                state.totalRideDistance = null
            })
    }
})

export default outdoorActivitySlice.reducer