import * as React from 'react';
import {BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar} from "recharts";
import FillUp from "../types/FillUp";

interface GasStationsChartProps {
    fillUps: FillUp[],
}



export default function GasStationsChart(props: GasStationsChartProps) {
    const

    return (
        <BarChart width={730} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="average mileage" fill="#8884d8" />
        </BarChart>
    );
}
