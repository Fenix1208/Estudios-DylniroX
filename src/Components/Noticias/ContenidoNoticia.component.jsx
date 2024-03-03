import './ContenidoNoticia.css';

const ContenidoNoticia = ({ encabezado, fecha, contenido }) => {
    return (
      <div className="contain-contenido-noticias">
        <h2 className='encabezado-elegante-Noticias'>{encabezado}</h2>
        <p className='fecha-contenido-noticias'>Cambios publicados el: {fecha}</p>
        {/* Utiliza <br /> para crear saltos de línea en el contenido */}
        {contenido.split('\n').map((line, index) => (
          <p className='parrafo-contenido-noticias' key={index}>{line}</p>
        ))}
      </div>
    );
  };

export default ContenidoNoticia;