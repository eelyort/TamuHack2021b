import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@material-ui/core";
import "./timer.css";
import ExpandMoreIcon from "@material-ui/core/SvgIcon/SvgIcon";


export default function Timer (props) {
    const { timeTillTakeoff, timeToGate, caloriesPerTime } = props;
    return (
		<Accordion variant={'outlined'}>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
			>
                <div className = "style">
<<<<<<< HEAD
					<Typography variant={'body2'}>
						Free time left:
					</Typography>
					<Typography variant={'h6'}>
						{Math.floor((timeToGate) / 60 / 60)} hours Math.floor((timeToGate) / 60 % 60)} minutes {(timeToGate)  % 60} seconds
					</Typography>
=======
				<Typography variant={'body2'}>
					Free time left:
				</Typography>
                <Typography variant={'h6'}>
					{Math.floor((timeTillTakeoff-timeToGate) / 60)} minutes {(timeTillTakeoff-timeToGate)  % 60} seconds
				</Typography>
>>>>>>> a1bbe0f (fix timer)
                </div>
			</AccordionSummary>
			<AccordionDetails className = "style2">
                <div className = "style">
				<Typography variant={'body2'}>
					Plane takes off in:
				</Typography>
                <Typography variant={'h6'}>
					{Math.floor((timeToGate) / 60 / 60)} hours Math.floor((timeToGate) / 60 % 60)} minutes {(timeToGate)  % 60} seconds
				</Typography>
                <Typography variant={'body2'}>
					<br></br>Travel time to gate:
				</Typography>
                <Typography variant={'h6'}>
                	{Math.floor((timeToGate) / 60 / 60)} hours Math.floor((timeToGate) / 60 % 60)} minutes {(timeToGate)  % 60} seconds
				</Typography>
                <Typography variant={'body2'}>
					<br></br>Calories Burned:
				</Typography>
                <Typography variant={'h6'}>
					{Math.floor((timeToGate) / 60 / 60)} hours Math.floor((timeToGate) / 60 % 60)} minutes {(timeToGate)  % 60} seconds
				</Typography>
                </div>
			</AccordionDetails>
		</Accordion>
    );
}