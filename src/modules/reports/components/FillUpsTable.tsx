import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FillUp from "../types/FillUp";

interface FillUpTableProps {
    fillUps: FillUp[],
}

function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function FillUpsTable(props: FillUpTableProps) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Gas Station</TableCell>
                        <TableCell>Gas Type</TableCell>
                        <TableCell>Liters</TableCell>
                        <TableCell>Distance</TableCell>
                        <TableCell>Mismatch</TableCell>
                        <TableCell>Gas mileage</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.fillUps.map((row) => (
                        <TableRow
                            key={row.date.toString()}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.date.toString()}
                            </TableCell>
                            <TableCell>{row.gasStation}</TableCell>
                            <TableCell>{row.gasType}</TableCell>
                            <TableCell>{row.liters}</TableCell>
                            <TableCell>{row.odometer}</TableCell>
                            <TableCell>{row.mismatch ? "True" : "False"}</TableCell>
                            <TableCell>{row.odometer/row.liters}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
