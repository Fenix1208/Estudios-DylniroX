import './Avances.css';

const Avances = ({ encabezado, fecha, estado, contenido }) => {
    return (
        <div className="contain-contenido-Avances">
        <div className="columna-izquierda">
          <h2 className='encabezado-elegante-Avances'>{encabezado}</h2>
          {/* Utiliza <br /> para crear saltos de línea en el contenido */}
          {contenido.split('\n').map((line, index) => (
            <p className='parrafo-contenido-Avances' key={index}>{line}</p>
          ))}
        </div>
        <div className="columna-derecha">
          <p className='contenido-Avances'>Publicado el: {fecha}</p>
          <p className='contenido-Avances'>Estado: {estado}</p>
        </div>
      </div>
    );
  };

export default Avances;