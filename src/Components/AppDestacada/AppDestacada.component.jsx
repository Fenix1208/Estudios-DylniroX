import "./AppDestacada.css";
import cardinal from "../Img/CardinalDyXAppDestock.png";

const AppDestacada = () => {
  return (
    <div className="contenedor-destacado">
      <div className="izquierda">
        <h1 className="encabezado-destacado">
          Todas nuestras aplicaciones en un mismo lugar
        </h1>
        <p className="parrafo-destacado">
          Presentamos Cardinal de DyX para escritorio, nuestra tienda de
          aplicaciones donde podrás encontrar y adquirir nuestros sistemas.
          Además, tendrás acceso a actualizaciones y estarás al día con las
          novedades que llegan a DylniroX™. Incluso obtendrás acceso a todo
          nuestro material visual, como videos de presentación, que solo estarán
          disponibles durante los estrenos. Creamos esta plataforma para mejorar
          nuestra comunicación con nuestros usuarios, y ahora puedes acceder a
          ella siendo usuario de Software EXCLUSIVO.
        </p>
      </div>
      <div className="derecha">
        <img className="destacado-imagen" src={cardinal} alt="Cardinal" />
      </div>
    </div>
  );
};

export default AppDestacada;
