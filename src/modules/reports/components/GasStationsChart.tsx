import * as React from 'react';
import {BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar} from "recharts";
import FillUp from "../types/FillUp";

interface GasStationsChartProps {
    fillUps: FillUp[],
}

interface GasStationStatistics {
    name: string,
    avg_mileage: number
}

interface GasStationRawData {
    odometer: number,
    liters: number,
}

export default function GasStationsChart(props: GasStationsChartProps) {
    let raw_data: { [id: string] : GasStationRawData; } = {};
    for (let fillUp of props.fillUps) {
        if (fillUp.gasStation in raw_data) {
            raw_data[fillUp.gasStation].liters += fillUp.liters;
            raw_data[fillUp.gasStation].odometer += fillUp.odometer;
        } else  {
            raw_data[fillUp.gasStation] = {odometer: fillUp.odometer, liters: fillUp.liters};
        }
    }

    const data: GasStationStatistics[] = [];
    for (let gas_station in raw_data) {
        data.push({name: gas_station, avg_mileage: raw_data[gas_station].odometer/raw_data[gas_station].liters})
    }

    return (
        <BarChart width={730} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="avg_mileage" fill="#8884d8" />
        </BarChart>
    );
}
