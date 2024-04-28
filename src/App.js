// App.js
import React, { useState, useEffect  } from 'react';
import Menu from './Components/Menu/Menu.component';
import MenuMobil from './Components/Menu/MenuMobil.component';
import Principal from './Components/Principal/Principal.component';
import Muestrario from './Components/Muestrario/Muestrario.component';
import Noticias from './Components/Noticias/Noticias.component';
import Informacion from './Components/Informacion/Informacion.compoent';
import FamiliaDyX from './Components/Familia DyX/FamiliaDyX.component';
import Evento from './Components/Eventos/Evento.component';
import Footer from './Components/Footer/Footer.component';

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Decide cuál componente de menú renderizar según el ancho de la ventana
  const renderMenu = () => {
    if (windowWidth > 600) {
      // Pantallas grandes: Renderiza el menú completo
      return <Menu onPageChange={handlePageChange}/>;
    } else {
      // Dispositivos móviles: Renderiza el menú móvil
      return <MenuMobil onPageChange={handlePageChange}/>;
    }
  };

  const [currentPage, setCurrentPage] = useState('menu'); // Estado inicial: 'menu'

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  

  return (
    <div className="App">
      {renderMenu()} {/* Menú siempre visible */}
      <div className="content">
        {currentPage === 'menu' && <Principal onPageChange={handlePageChange} />}
        {currentPage === 'inicio' && <Principal />}
        {currentPage === 'evento' && <Evento />}
        {currentPage === 'muestrario' && <Muestrario />}
        {currentPage === 'noticias' && <Noticias />}
        {currentPage === 'familia' && <FamiliaDyX/>}
        {currentPage === 'informacion' && <Informacion/>}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
