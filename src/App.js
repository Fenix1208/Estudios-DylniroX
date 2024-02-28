// App.js
import React, { useState } from 'react';
import Menu from './Components/Menu/Menu.component';
import Principal from './Components/Principal/Principal.component';
import Muestrario from './Components/Muestrario/Muestrario.component';
import Informacion from './Components/Informacion/Informacion.compoent';
import Footer from './Components/Footer/Footer.component';
import FamiliaDyX from './Components/Familia DyX/FamiliaDyX.component';

function App() {
  const [currentPage, setCurrentPage] = useState('menu'); // Estado inicial: 'menu'

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="App">
      <Menu onPageChange={handlePageChange} /> {/* Menú siempre visible */}
      <div className="content">
        {currentPage === 'menu' && <Principal onPageChange={handlePageChange} />}
        {currentPage === 'inicio' && <Principal />}
        {currentPage === 'muestrario' && <Muestrario />}
        {currentPage === 'familia' && <FamiliaDyX/>}
        {currentPage === 'informacion' && <Informacion/>}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
