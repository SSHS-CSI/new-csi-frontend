import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Color from "color";
import { Typography, Card, CardActionArea, CardContent } from "@material-ui/core";
import CssGridCell from "../../components/timetable/css-grid-cell.js";

const genColor = subject => {
    switch(subject) {
    case "국어": return Color.rgb(223, 92, 87);
    case "화학": return Color.rgb(241, 155, 85);
    case "수학": return Color.rgb(247, 242, 106);
    case "외국어": return Color.rgb(216, 243, 95);
    case "생물": return Color.rgb(113, 236, 129);
    case "물리": return Color.rgb(111, 229, 214);
    case "사회": return Color.rgb(99, 199, 243);
    case "지학": return Color.rgb(59, 124, 246);
    case "정보": return Color.rgb(101, 80, 246);
    case "예체능": return Color.rgb(199, 81, 246);
    default: return Color.rgb(178, 178, 178);
    }
};

const useStyles = makeStyles(theme => ({
    cell: {
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative"
    },
    bar: ({ subject }) => ({
        backgroundColor: Color(genColor(subject)).toString(),
        position: "absolute",
        left: theme.spacing(0.5),
        right: theme.spacing(0.5),
        top: theme.spacing(0.5),
        height: theme.spacing(0.5),
        borderRadius: theme.spacing(0.5)
    }),
    click: {
        width: "100%",
        height: "100%",
        textAlign: "center"
    }
}));

module.exports = ({
    weekday, start, end, name, onClick, ...props
}) => {
    const classes = useStyles(props);
    return (
        <CssGridCell left={weekday} top={start} height={end - start + 1}>
            <Card className={classes.cell}>
                <CardActionArea className={classes.click} onClick={onClick}>
                    <CardContent>
                        <Typography variant="body1">
                            {name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <div className={classes.bar} />
            </Card>
        </CssGridCell>
    );
};
