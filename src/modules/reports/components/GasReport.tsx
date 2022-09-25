import { Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Table from "./Table";
import User from "../../users/interfaces/User";
import {getUserData} from "../../general/utils/requests";
import {URLs} from "../../general/utils/URLs";


export default function RegistrarCliente() {

    const [user, setUser] = useState<User | undefined>(undefined);

    useEffect(() => {

        fetch(URLs.users + "/user1")
            .then(response =>
                response.json()).then(data => {
            setUser(data);
        });
    }, []);

    return(
        <Container maxWidth="lg" style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <Typography variant="h3" style={{margin: '10px'}}> Gas Report </Typography>
            <Typography variant="h5" style={{margin: '10px'}}> Hi {user?.name} </Typography>
            <Table />
        </Container>
    );
}