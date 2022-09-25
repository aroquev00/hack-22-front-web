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
            odometer: 500,
            mismatch: false,
        },
        {
            date: new Date(new Date().setDate(new Date().getDate()-5)),
            gasStation: "BP Carretera Nacional",
            liters: 10,
            gasType: "Premium",
            odometer: 300,
            mismatch: false,
        },
        {
            date: new Date(new Date().setDate(new Date().getDate()-8)),
            gasStation: "PEMEX TEC",
            liters: 15,
            gasType: "Premium",
            odometer: 400,
            mismatch: false,
        }
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