import React from "react";
import "./Muestrario.css";
import Aplicacion from "./Aplicacion.component";
import KoobenI from "../Img/imgapps/KIWeb.png";
import Kaatatik from "../Img/imgapps/KSWeb.png";
import OTS from "../Img/imgapps/OTSWeb.png";
import OTclasic from "../Img/imgapps/OTclasic.png";
import Lirix from "../Img/imgapps/LirixStoreWebtree.png";
import LirixDev from "../Img/imgapps/LirixDeveloperWebtwo.png";
import LirixPortal from "../Img/imgapps/LirixPortalWebtwo.png";
import LaEstafaFelis from "../Img/imgapps/LaEstafaFelizWEB.png";
import RiverManufacturing from "../Img/imgapps/RiverWEB.png";
import EvaSoftware from "../Img/imgapps/EvaWEB.png";
import OTNoLanzada from "../Img/imgapps/OTSprevWEB.png";
import Comienzo from "../Img/imgapps/ComienzoWEB.png";
import AppDestacada from "../AppDestacada/AppDestacada.component";

const Muestrario = () => {
  return (
    <div className="muestrario-container">
      <div className="encabezados-container">
        <h1 className="Encabezado">Descubre algunos de nuestros proyectos</h1>
        <p className="Sub-encabezado">
          Desarrollados en Visual Studio con C# y XAML.
        </p>
      </div>

      <div className="contenedor-muestrario">
        <h1 className="encabezado-elegante">
          Desarrollados en WindowsForms con <span>C#</span> y{" "}
          <span>SQL Server</span>.
        </h1>

        <div className="contenedor-app">
          <Aplicacion
            encabezado={"OblioN Tycons"}
            background={OTclasic}
            parrafo={"Nuestro primer gran proyecto."}
            descripcion={
              "Bienvenido a OblioN Tycons, un software especialmente desarrollado para Invocadores. Como parte del gremio de Invocadores, " +
              " tu deber es distribuir mercancías por OblioN, lo que beneficia a sus habitantes y a ti. Sin embargo, no todo es tan fácil, y " +
              " lo veras cuando tus invocaciones se enfrenten a diferentes enemigos en la Colina de las Sombras, donde los contratos colocados por el gremio de invocadores te brindasen de la moneda más valiosa de OblioN, los Fragmentos ARCAICOS." +
              " Disfruta de una experiencia tycon, mientras obtienes todas las invocaciones posibles hasta la fecha."
            }
          />
          <Aplicacion
            encabezado={"Kooben Inventario 2.0E"}
            background={KoobenI}
            parrafo={"El antes y despues de nuestras aplicaciones."}
            descripcion={
              "Gestor de inventario para restaurantes que permite controlar el inventario, tener a la mano las recetas, asignar restricciones a empleados y tener un control sobre las ventas realizadas. Esta aplicación fue desarrollada como proyecto final y " +
              " evaluada en tres ocasiones. Ahora está disponible de forma gratuita para descargar, probar y puntuar, en la versión mas completa, mejorada, rediseña y optimizada para mejorar la" +
              " experiencia que KI 1.1.1 ya ofrecía."
            }
          />
          <Aplicacion
            encabezado={"OTS Edicion Reliquia"}
            background={OTS}
            parrafo={"Mejorando clasicos de DyX."}
            descripcion={
              "Bienvenido a OblioN, la ciudad para invocadores más grande de ArkaNe, aquí podrás trabajar como recolector y comerciante para ganar la mayor cantidad de créditos posibles, o trabajar como invocador combatiendo con las distintas criaturas " +
              " que el gremio a encontrado a los alrededores de OblioN. Conviértete en un guardián prestigiado o en el mas rico de todo el lugar. "
            }
          />
        </div>

        <div className="contenedor-app">
          <Aplicacion
            encabezado={"2020"}
            background={Comienzo}
            parrafo={"Primeros pasos"}
            descripcion={
              "Todos comenzamos alguna vez en algo que se convierte en más que un pasatiempo. Disfrutamos cada nueva creación y damos vida a nuestras ideas. DylniroX Estudios™ es hoy nuestra marca de presentación, y nuestros sistemas son la imagen que lo viste. Miremos estrellas juntos mientras disfrutamos de lo que más nos gusta hacer."
            }
          />
        <Aplicacion
            encabezado={"OblioN Tycons 2.0"}
            background={OTNoLanzada}
            parrafo={"Sistema en el olvido"}
            descripcion={
              "La versión 2.0 de OT Edición Estándar buscaba dar un giro total en el diseño de la aplicación y mejorar muchos aspectos de la misma. Sin embargo, esta versión nunca llegó a ver la luz y fue reemplazada posteriormente por OTS Edición Reliquia."
            }
          />
          <Aplicacion
            encabezado={"La estafa feliz"}
            background={LaEstafaFelis}
            parrafo={"Proyecto escolar."}
            descripcion={
              "Aplicación para tiendas que permite la organización, gestión y control del inventario, ofreciendo la posibilidad de realizar pedidos de aquellos productos en escasez de existencias, y de realizar ventas, para aquellos clientes interesados. " +
              "Cuenta con un sistema de soporte integrado, ventanas flotantes y sistema de notificaciones para la confirmación de transacciones. "
            }
          />
          <Aplicacion
            encabezado={"River Manufacturing"}
            background={RiverManufacturing}
            parrafo={"Evaluacion de examen."}
            descripcion={
              "Propuesta de diseño para sistema de rastreo de transportes de carga. Permite localizar la ubicación de los camiones, destinar rutas de trabajo, obtener un historial de rutas y ver estadísticas en función a las operaciones que realiza la empresa."
            }
          />
          <Aplicacion
            encabezado={"Eva Software"}
            background={EvaSoftware}
            parrafo={"Migrador de Base de Datos."}
            descripcion={
              "Este sistema es un complemento lanzado por Estudios Dylnirox para Oblion Tycons (OT) con la finalidad de poder migrar datos de una base de datos (BD) desactualizada, a una BD acorde a la nueva versión de OT.   Esto, por que en su momento OT no contaba " +
              "con una BD bien estructurada y normalizada, por lo que incluir nuevo contenido afectaba a BD de versiones anteriores. Actualmente este sistema ya no es requerido en la versión mejorada de OT, Oblion Tycons Softwre Edición Reliquia cuenta con una base de " +
              "datos a la que el mismo sistema actualiza, y donde a su vez, recibió una planificación para prevenir cambios y ofrecer una BD mas estable."
            }
          />
          
        </div>

        <h1 className="encabezado-elegante">
          Desarrollados en WPF con C#, XAML y SQL Server.
        </h1>
        <div className="contenedor-app">
          <Aplicacion
            encabezado={"Kaatik Software™"}
            background={Kaatatik}
            parrafo={"Lo nuevo llego a DyX."}
            descripcion={
              "Nuestro software echo a la medida para la organización, gestión y control de pedidos. Incluye roles de usuarios, " +
              "personalización de pedidos y control de ventas. "
            }
          />
          <Aplicacion
            encabezado={"Lirix Store™"}
            background={Lirix}
            parrafo={"Descubriendo sueños."}
            descripcion={
              "Una tienda de aplicaciones elegante propuesta para concursar en INOVATEC, integra las mejores novedades al llevarnos a explorar nuevas formas de desarrollar aplicaciones. Lirix es la primera aplicación que cuenta con objetos dinámicos" +
              " y la posibilidad de descargar otros sistemas desde la nube. Un elegante diseño contrastado con colores oscuros e impulsado con aceleración por Hardware hacen de Lirix el proyecto con mejor UI y UX de DylniroX™. Este proyecto ha sido " +
              " desarrollado por DylniroX Software™ | Azulados y Asociados Corp."
            }
          />
          <Aplicacion
            encabezado={"Lirix Developer™"}
            background={LirixDev}
            parrafo={"Donde los sueños comienzan"}
            descripcion={
              "El complemento ideal para los desarrolladores que publican sus sistemas en nuestra tienda. Con Lirix Dev™, " +
              "accedes a un entorno con herramientas de administración y control para tus aplicaciones, así como utilidades para estar en constante comunicación con tus clientes."
            }
          />
        </div>
      </div>

      <h1 className="encabezado-elegante">
        Desarrollados en .Net Core y SQL Server.
      </h1>
      <div className="contenedor-app">
        <Aplicacion
          encabezado={"Portal Lirix™"}
          background={LirixPortal}
          parrafo={"Los sueños viajan por el aire a oidos de muchos"}
          descripcion={
            "Un entorno combinado con sistemas que se integran tanto en nuestras plataformas de escritorio como en la web. Accede a las novedades en tiempo real sin necesidad de realizar descargas, todo directamente desde la web."
          }
        />
      </div>

      <h1 className="encabezado-elegante">
        Otros proyectos llegaran con el tiempo a Cardinal, esperalos.
      </h1>
      <AppDestacada />
    </div>
  );
};

export default Muestrario;
