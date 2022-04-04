import React, { FC } from 'react';
import { Route, Routes, Router } from 'react-router-dom';

import StudentsList from './StudentsList';

const App: FC = () => (
    <>
    <Routes>
        <Route path="/list" element={<StudentsList/>}/>
    </Routes>
        
    </>
);

export default App;