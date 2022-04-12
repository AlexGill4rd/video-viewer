import React from 'react';
import { Routes ,Route } from 'react-router-dom';

import HomePage from './Pages/Homepage/HomePage';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/homepage' element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
