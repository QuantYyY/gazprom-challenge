import React, { FC } from 'react';
import { Route, Routes, Router } from 'react-router-dom';

import StudentsList from './StudentsList';
import Home from './MainPages/Home';

const App: FC = () => (
    <>
    <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/list" element = {<StudentsList/>}/>
    </Routes>
        
    </>
);

export default App;