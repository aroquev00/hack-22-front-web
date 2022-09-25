import { Container, Typography } from "@mui/material";
import React from "react";

import Table from "./Table"
export default function RegistrarCliente() {
    return(
        <Container maxWidth="lg" style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <Typography variant="h3" style={{margin: '10px'}}> Gas Report </Typography>
            <Table />
        </Container>
    );
}