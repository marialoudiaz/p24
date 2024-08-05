import React, { Suspense, lazy, useRef, useState, useEffect } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Langues = lazy(() => import('./Views/Langues.js'));
const Chargement = lazy(() => import('./Views/Chargement.js'));
const Homepage = lazy(() => import('./Views/Homepage.js'));
const Projet = lazy(() => import('./Components/projet.js'));


const App = () => {

  return (
    <> 
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Langues />} />
            <Route path="/menu" element={<Chargement />} />
            <Route path="/homepage/:id" element={<Homepage />} />
            <Route path="/projet/:id" element={<Projet />} />
          </Routes>
        </Suspense>
    </Router>   
    
  </>
)
}
export default App;
