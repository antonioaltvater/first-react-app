import React from "react";
import {  Routes, Route, BrowserRouter } from "react-router-dom";


import Dashboard from "../pages/dashboard/dashboard";
import Repository from "../pages/repository/repository"

const MainRoutes: React.FC = () => (

        <Routes>
            <Route path="/" element={<Dashboard/>}></Route>
            <Route path="/repository" element={<Repository/>}></Route>
            <Route></Route>
        </Routes>
)


export default MainRoutes;


