import './App.css';
import Menu from './Menu/Menu';
import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import Home from './Pages/Home';
import Sobre from "./Pages/Sobre";
import Portifolio from "./Pages/Portifolio";
import Contato from "./Pages/Contato";


function App() {
  return (
    <div className="App">
      <Menu />
      <div className='main'>
        <Routes>                
            <Route exact path="/" element={<Home />} />
            <Route path="/Sobre" element={<Sobre />} />
            <Route path="/Portifolio" element={<Portifolio />} />
            <Route path="/Contato" element={<Contato />} />                        
        </Routes>
      </div>
      
    </div>
  );
}

export default App;
