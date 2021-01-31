import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@material-ui/core";
import "./timer.css";


export default function Timer(props) {
    const { timeTillTakeoff, timeToGate, caloriesPerTime } = props;
    return (
        <Accordion variant={'outlined'}>
            <AccordionSummary
            >
                <div className="style">
                    <Typography variant={'body2'}>
                        Free time left:
                </Typography>
                    <Typography variant={'h6'}>
						{Math.floor((timeTillTakeoff - timeToGate) / 60 / 60)} hours {Math.floor((timeTillTakeoff - timeToGate) / 60 % 60)} minutes {(timeTillTakeoff - timeToGate) % 60} seconds
                </Typography>
                </div>
            </AccordionSummary>
            <AccordionDetails className="style2">
                <div className="style">
                    <Typography variant={'body2'}>
                        Plane takes off in:
                </Typography>
                    <Typography variant={'h6'}>
                        {Math.floor((timeTillTakeoff) / 60 / 60)} hours {Math.floor((timeTillTakeoff) / 60 % 60)} minutes {(timeTillTakeoff) % 60} seconds
                </Typography>
                    <Typography variant={'body2'}>
                        <br></br>Travel time to gate:
                </Typography>
                    <Typography variant={'h6'}>
                        {Math.floor((timeToGate) / 60 / 60)} hours {Math.floor((timeToGate) / 60 % 60)} minutes {(timeToGate) % 60} seconds
                </div>
            </AccordionDetails>
        </Accordion>
    );
}