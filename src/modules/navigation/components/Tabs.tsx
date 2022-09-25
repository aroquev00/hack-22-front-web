import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Routes } from "../../general/utils/routes";

export default function NavTabs() {

    return (
        <Box sx={{ width: "100%" }}>
            <Button title="Dashboard" href={Routes.dashboard} color="primary">
                Dashboard
            </Button>
        </Box>
    );
}