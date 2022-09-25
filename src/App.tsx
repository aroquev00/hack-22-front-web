import React from 'react';
import './App.css';

import AppBar from "./modules/navigation/components/AppBar"
import GasReport from "./modules/reports/components/GasReport"
import { Routes } from "./modules/general/utils/routes";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: Routes.dashboard,
    element: <>
      <AppBar />
      <GasReport />
    </>,
  },
]);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
