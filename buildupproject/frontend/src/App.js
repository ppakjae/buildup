import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './cmp/Home';
import TeamBuild from './cmp/TeamBuild';

const App = () => {
    return (
        <Routes>
            {/* path는 _ 로 구분했습니다! */}
            <Route path='/' element={<Home />} />
            <Route path='/team_build' element={<TeamBuild />} />
        </Routes>
    );
};

export default App;