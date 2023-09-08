import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Header from './components/header';
import Beranda from './Beranda';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  {/* <Header/> */}
    <Routes>
      <Route path='/' element={<Beranda/>}/>
    </Routes>
  </BrowserRouter>
);


