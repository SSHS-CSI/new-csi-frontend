import { combineReducers } from "@reduxjs/toolkit";
import timetableReducer from "../features/timetable/timetable-slice.js";

export default combineReducers ({
    timetable: timetableReducer,
});
