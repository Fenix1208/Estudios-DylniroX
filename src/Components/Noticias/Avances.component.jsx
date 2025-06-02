import "./Avances.css";

const Avances = ({ encabezado, fecha, estado, contenido }) => {
  return (
    <div className="contain-contenido-Avances">
      <div className="row-superior">
        <h2 className="encabezado-elegante-Avances">{encabezado}</h2>
        {contenido.split("\n").map((line, index) => (
          <p className="parrafo-contenido-Avances" key={index}>
            {line}
          </p>
        ))}
      </div>
      <div className="row-inferior">
        <p className="p-texto-avance">Publicado el: {fecha}</p>
        <p className="p-texto-avance">Estado: {estado}</p>
      </div>
    </div>
  );
};

export default Avances;
