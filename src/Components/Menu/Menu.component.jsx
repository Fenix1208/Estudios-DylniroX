import "./Menu.css";

function Menu({ onPageChange }) {
  return (
    <nav className="top-menu">
      <ul className="menu-options">
      <button className="btnOPC" onClick={() => onPageChange('inicio')}>Inicio</button>
      <button className="btnOPC" onClick={() => onPageChange('muestrario')}>Muestrario</button>
      <button className="btnOPC" onClick={() => onPageChange('familia')}>Familia DyX</button>
      <button className="btnOPC" onClick={() => onPageChange('informacion')}>Informacion del Sitio</button>
      </ul>
    </nav>
  );
}

export default Menu;