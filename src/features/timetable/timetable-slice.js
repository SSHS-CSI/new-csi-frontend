import { createSlice } from "@reduxjs/toolkit";

const timetableSlice = createSlice({
    name: 'timetable',
    initialState: [],
    reducers: {
        loadTimetable(state, action) {
            
        },
        addClass(state, action) {
            
        },
        removeClass(state, action) {
            
        }
    }
});

export const { loadTimetable, addClass, removeClass } = timetableSlice.actions;

export default timetableSlice.reducer;
