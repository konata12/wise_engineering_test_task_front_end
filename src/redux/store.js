import { configureStore } from '@reduxjs/toolkit'
import outdoorActivitySlice from './outdoor_activity/outdoorActivity';

// SLICES

export const store = configureStore({
    reducer: {
        outdoorActivity: outdoorActivitySlice
    },
})