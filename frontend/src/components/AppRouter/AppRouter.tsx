import React, { FC } from "react";
import { Routes, Route } from 'react-router-dom';

import Home from "../MainPages/Home";
import StudentsList from "../StudentsList";

const AppRouter: FC = () =>(
    <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/participants" element = {<StudentsList/>}/>
    </Routes>
);

export default AppRouter;