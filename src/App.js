import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Langues from './Views/Langues.js';
import Chargement from './Views/Chargement.js';
import Homepage from './Views/Homepage.js';
import Projet from './Components/projet.js';

const App = () => {

  return (
    <> 
      <Router>
      <Routes>
        <Route path="/" element={<Langues />} />
        <Route path="/menu" element={<Chargement />} />
        <Route path="/homepage/:id" element={<Homepage />} />
        <Route path="/projet/:id" element={<Projet />} />
      </Routes>
    </Router>   
    
  </>
)
}
export default App;
