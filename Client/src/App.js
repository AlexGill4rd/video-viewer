import React from 'react';
import { Routes ,Route } from 'react-router-dom';

import HomePage from './Pages/Homepage/HomePage';
import VideoConverterPage from './Pages/VideoConverter/VideoConverterPage';

function App() {
  return (
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/homepage' element={<HomePage />} />
        <Route exact path='/video/converter' element={<VideoConverterPage />} />
      </Routes>
  );
}

export default App;
