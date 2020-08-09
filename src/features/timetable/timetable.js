import React from "react";
import { connect } from "react-redux";
import { removeClass } from "./timetable-slice.js";

import CssGrid from "../../components/timetable/css-grid.js";
import TimetableCell from "./timetable-cell.js";

function timetable({ timetable, removeClass }) {
    return (
        <>
            <CssGrid rows={8} columns={6} gap={8}>
                {timetable.map(({
                    name, times, subject, ...props
                }) => times.map(({
                    weekday, start, end
                }) => (
                    <TimetableCell
                        key={name + weekday + start + end}
                        name={name}
                        weekday={weekday} start={start} end={end}
                        {...props}
                    />
                )))}
            </CssGrid>
        </>
    );
}

const mapStateToProps = state => ({
    timetable: state,
});

const mapDispatchToProps = { removeClass };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(timetable);
