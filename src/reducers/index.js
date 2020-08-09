import { combineReducers } from "react-redux";
import timetableReducer from "features/timetable/timetable-slice.js";

export default combineReducers ({
    timetable: timetableReducer,
});
