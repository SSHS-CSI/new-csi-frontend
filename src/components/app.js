import React from "react";
import { useState } from "react";

import Timetable from "../features/timetable/timetable.js";

function App() {
    const [timetableMode, setTimetableMode] = useState("normal");
    
    return (
        <>
            <Timetable />
        </>
    );
}

export default App;
