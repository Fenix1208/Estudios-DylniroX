import React from "react";
import "./Muestrario.css";
import Aplicacion from "./Aplicacion.component";
import KoobenI from "../Img/KIWeb.png";
import Kaatatik from "../Img/KSWeb.png";
import OTS from "../Img/OTSWeb.png";
import OTclasic from "../Img/OTclasic.png";
import Lirix from "../Img/LirixStoreWebtwo.png";
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
            parrafo={"El antes y despues de nuestras aplicaciones"}
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

        <h1 className="encabezado-elegante">
          Desarrollados en WPF con C# XAML y SQL Server.
        </h1>
        <div className="contenedor-app">
          <Aplicacion
            encabezado={"Kaatik Software"}
            background={Kaatatik}
            parrafo={"Lo nuevo llego a DyX."}
            descripcion={
              "Nuestro software echo a la medida para la organización, gestión y control de pedidos. Incluye roles de usuarios, " +
              "personalización de pedidos y control de ventas. "
            }
          />
          <Aplicacion
            encabezado={"Lirix Store"}
            background={Lirix}
            parrafo={"Descubriendo sueños"}
            descripcion={
              "Una tienda de aplicaciones elegante propuesta para concursar en INOVATEC, integra las mejores novedades al llevarnos a explorar nuevas formas de desarrollar aplicaciones. Lirix es la primera aplicación que cuenta con objetos dinámicos" + 
              " y la posibilidad de descargar otros sistemas desde la nube. Un elegante diseño contrastado con colores oscuros e impulsado con aceleración por Hardware hacen de Lirix el proyecto con mejor UI y UX de DylniroX™. Este proyecto ha sido " + 
              " desarrollado por DylniroX Software™ colaborando con un grandioso equipo de trabajo. "
            }
          />
        </div>
      </div>

      <h1 className="encabezado-elegante">
          Otros proyectos llegaran con el tiempo a Cardinal, esperalos.
        </h1>
      <AppDestacada />
    </div>
  );
};

export default Muestrario;
