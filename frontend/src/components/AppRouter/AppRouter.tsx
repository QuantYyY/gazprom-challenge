import React, { FC } from "react";
import { Routes, Route } from 'react-router-dom';

import Home from "../MainPages/Home";
import StudentsList from "../StudentsList";
import AddStudents from "../AddStudents";
import Tasks from "../MainPages/Tasks";

const AppRouter: FC = () =>(
    <Routes>
        <Route path="/add" element = {<AddStudents/>}/>
        <Route path="/" element = {<Home/>}/>
        <Route path="/participants" element = {<StudentsList/>}/>
        <Route path="/tasks" element = {<Tasks/>}/>
    </Routes>
);

export default AppRouter;