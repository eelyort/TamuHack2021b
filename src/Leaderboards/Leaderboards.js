import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);


const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);


function createData(category, score, rank) {
    return { category, score, rank };
}

const rows = [
    createData('Calories burned', '832 calories', 'Bronze'),
    createData('Steps taken', '2873 steps', 'Gold'),
    createData('Arrival to gate', '3 minutes early', 'Silver'),
];


export default function Leaderboard() {
    const classes = useStyles();

    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography className={classes.heading}>Leaderboards</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Category</StyledTableCell>
                                <StyledTableCell align="right">Score</StyledTableCell>
                                <StyledTableCell align="right">Ranking</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.name}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.category}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">{row.score}</StyledTableCell>
                                    <StyledTableCell align="right">{row.rank}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>

                    </Table>
                </TableContainer>
            </AccordionDetails>
        </Accordion>
    );
}
