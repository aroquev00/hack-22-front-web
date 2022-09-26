import { Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import FillUpsTable from "./FillUpsTable";
import User from "../../users/interfaces/User";
import {getUserData} from "../../general/utils/requests";
import {URLs} from "../../general/utils/URLs";
import FillUp from "../types/FillUp";
import GasStationsChart from "./GasStationsChart";


export default function RegistrarCliente() {

    const [user, setUser] = useState<User | undefined>(undefined);

    useEffect(() => {

        fetch(URLs.users + "/user1")
            .then(response =>
                response.json()).then(data => {
            setUser(data);
        });
    }, []);


    const gasData: FillUp[] = [
        {
            date: new Date(),
            gasStation: "PEMEX TEC",
            liters: 25,
            gasType: "Premium",
            odometer: 350,
            mismatch: false,
        },
        {
            date: new Date(new Date().setDate(new Date().getDate()-5)),
            gasStation: "BP Carretera Nacional",
            liters: 10,
            gasType: "Premium",
            odometer: 350,
            mismatch: false,
        },
        {
            date: new Date(new Date().setDate(new Date().getDate()-8)),
            gasStation: "PEMEX TEC",
            liters: 15,
            gasType: "Premium",
            odometer: 200,
            mismatch: false,
        },
        {
            date: new Date(new Date().setDate(new Date().getDate()-13)),
            gasStation: "OXXO GAS VALLE ORIENTE",
            liters: 10,
            gasType: "Premium",
            odometer: 200,
            mismatch: false,
        },
        {
            date: new Date(new Date().setDate(new Date().getDate()-16)),
            gasStation: "MOBIL GARZA SADA",
            liters: 13,
            gasType: "Premium",
            odometer: 210,
            mismatch: false,
        },
        {
            date: new Date(new Date().setDate(new Date().getDate()-21)),
            gasStation: "GULF REVOLUCION",
            liters: 16,
            gasType: "Premium",
            odometer: 250,
            mismatch: false,
        },
        {
            date: new Date(new Date().setDate(new Date().getDate()-24)),
            gasStation: "BP Carretera Nacional",
            liters: 10,
            gasType: "Premium",
            odometer: 250,
            mismatch: false,
        },
        {
            date: new Date(new Date().setDate(new Date().getDate()-29)),
            gasStation: "GULF REVOLUCION",
            liters: 5,
            gasType: "Premium",
            odometer: 100,
            mismatch: false,
        },
        {
            date: new Date(new Date().setDate(new Date().getDate()-33)),
            gasStation: "GULF REVOLUCION",
            liters: 15,
            gasType: "Premium",
            odometer: 220,
            mismatch: false,
        },
        {
            date: new Date(new Date().setDate(new Date().getDate()-35)),
            gasStation: "PEMEX TEC",
            liters: 5,
            gasType: "Premium",
            odometer: 90,
            mismatch: false,
        },
        {
            date: new Date(new Date().setDate(new Date().getDate()-38)),
            gasStation: "GULF REVOLUCION",
            liters: 17,
            gasType: "Premium",
            odometer: 265,
            mismatch: false,
        },
        {
            date: new Date(new Date().setDate(new Date().getDate()-42)),
            gasStation: "MOBIL GARZA SADA",
            liters: 5,
            gasType: "Premium",
            odometer: 70,
            mismatch: false,
        },
        {
            date: new Date(new Date().setDate(new Date().getDate()-46)),
            gasStation: "BP Carretera Nacional",
            liters: 15,
            gasType: "Premium",
            odometer: 400,
            mismatch: false,
        },
        {
            date: new Date(new Date().setDate(new Date().getDate()-50)),
            gasStation: "MOBIL GARZA SADA",
            liters: 13,
            gasType: "Premium",
            odometer: 180,
            mismatch: false,
        },
        {
            date: new Date(new Date().setDate(new Date().getDate()-55)),
            gasStation: "MOBIL GARZA SADA",
            liters: 12,
            gasType: "Premium",
            odometer: 170,
            mismatch: false,
        },
        {
            date: new Date(new Date().setDate(new Date().getDate()-57)),
            gasStation: "PEMEX TEC",
            liters: 15,
            gasType: "Premium",
            odometer: 300,
            mismatch: false,
        },
        {
            date: new Date(new Date().setDate(new Date().getDate()-60)),
            gasStation: "MOBIL GARZA SADA",
            liters: 10,
            gasType: "Premium",
            odometer: 150,
            mismatch: false,
        },
        {
            date: new Date(new Date().setDate(new Date().getDate()-62)),
            gasStation: "PEMEX TEC",
            liters: 12,
            gasType: "Premium",
            odometer: 230,
            mismatch: false,
        },
        {
            date: new Date(new Date().setDate(new Date().getDate()-64)),
            gasStation: "BP Carretera Nacional",
            liters: 9,
            gasType: "Premium",
            odometer: 320,
            mismatch: false,
        },
        
        {
            date: new Date(new Date().setDate(new Date().getDate()-67)),
            gasStation: "BP Carretera Nacional",
            liters: 5,
            gasType: "Premium",
            odometer: 175,
            mismatch: false,
        },
        
    ]

    return(
        <Container maxWidth="lg" style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <Typography variant="h3" style={{margin: '10px'}}> Gas Report </Typography>
            <Typography variant="h5" style={{margin: '10px'}}> Hi {user?.name} </Typography>

            <Typography variant="h5" style={{margin: '10px'}}> Best Gas Stations </Typography>
            <GasStationsChart fillUps={gasData} />

            <Typography variant="h5" style={{margin: '10px'}}> Fill up history </Typography>
            <FillUpsTable fillUps={gasData} />
        </Container>
    );
}