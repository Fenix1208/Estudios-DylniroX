import React, { useState, useEffect } from "react";
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
import MWOWEB from "../Img/imgapps/MWOWEB.png";
import D5WEB from "../Img/imgapps/D5WEB.png";
import TT from "../Img/imgapps/ThoughtTrailIcon.png";
import MN from "../Img/imgapps/MIUNcon.png";
import QuillNote from "../Img/imgapps/QuillNoteComWindows.png";
import QuillNoteMovil from "../Img/imgapps/QuillNoteComMovil.png";
import LunaHarmony from "../Img/imgapps/LunaHarmonyCardinal.png";
import AppDestacada from "../AppDestacada/AppDestacada.component";
import BajaAudio from "../Img/imgapps/BAJA_Audio.png";

const Muestrario = () => {
  const [info, setInfo] = useState({
    encabezado: "",
    frase: "",
    descripcion: "",
    desarrollador: "",
  });

  const handleAplicacionClick = (
    encabezado,
    frase,
    descripcion,
    desarrollador
  ) => {
    setInfo({ encabezado, frase, descripcion, desarrollador });
    handleClick();
  };

  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Limpiar el estado cuando el componente se desmonta
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [visible]);

  const WindosForms = [
    {
      background: Comienzo,
      encabezado: "2020",
      frase: "Primeros pasos.",
      descripcion:
        "Todos comenzamos alguna vez en algo que se convierte en más que un pasatiempo. Disfrutamos cada nueva creación y damos vida a nuestras ideas. DylniroX Estudios™ es hoy nuestra marca de presentación, y nuestros sistemas son la imagen que lo viste. Miremos estrellas juntos mientras disfrutamos de lo que más nos gusta hacer.",
      empresa: "Dylnirox™",
      fecha: "2020",
    },
    {
      background: LaEstafaFelis,
      encabezado: "La estafa feliz",
      frase: "Proyecto escolar.",
      descripcion:
        "Aplicación para tiendas que permite la organización, gestión y control del inventario, ofreciendo la posibilidad de realizar pedidos de aquellos productos en escasez de existencias, y de realizar ventas, para aquellos clientes interesados. " +
        "Cuenta con un sistema de soporte integrado, ventanas flotantes y sistema de notificaciones para la confirmación de transacciones. ",
      empresa: "Estudios Dylnirox™",
      fecha: "2021",
    },
    {
      background: MWOWEB,
      encabezado: "Mun Wai ONE",
      frase: "Panel de control de Valio.",
      descripcion:
        "El panel de control de nuestra asistente virtual llega para sustituir el primer panel de configuración lanzado con Maya-D4. Este panel permite controlar, " +
        "administrar y consultar los comandos de voz y respuestas que nuestra asistente acepta, así como configurar las aplicaciones que deseas abrir o los " +
        "sitios a los que deseas navegar mediante voz. Este panel administrativo incorpora lo mejor que Estudios Dylnirox™ " +
        "tenía al momento de desarrollo, innovando con nuevas prácticas de desarrollo junto a interfaces más nutridas y una experiencia de navegación mejorada. ",
      empresa: "Estudios Dylnirox™",
      video: "https://www.youtube.com/watch?v=Yw8PYJSldsQ",
      fecha: "2021",
    },
    {
      background: RiverManufacturing,
      encabezado: "River Manufacturing",
      frase: "Evaluacion de examen.",
      descripcion:
        "Propuesta de diseño para sistema de rastreo de transportes de carga. Permite localizar la ubicación de los camiones, destinar rutas de trabajo, obtener un historial de rutas y ver estadísticas en función a las operaciones que realiza la empresa.",
      empresa: "Estudios Dylnirox™",
      fecha: "2021",
    },
    {
      background: D5WEB,
      encabezado: "Maya-D5",
      frase: "Asistente virtual.",
      descripcion:
        "La distribución 5 (D5) de nuestra asistente virtual para ordenadores llega con mejoras en la comunicación. " +
        "Ahora puede aceptar comandos de voz a voz, texto a texto y texto a voz. D5 se desarrolló teniendo en cuenta todo lo " +
        "aprendido por Estudios Dylnirox™ hasta el momento de desarrollo. Contempla una interfaz más nutrida y una experiencia mejorada, " +
        "con sistema de silencio, configuración, cambios de plantilla en la interfaz, mejoras en la comunicación y comprensión de palabras, " +
        "así como la posibilidad de entender peticiones más extensas. " +
        "Hasta la fecha, Estudios Dylnirox™ ha optado por no continuar con su derrollo, sin embargo, puede que en un futuro regrese.",
      empresa: "Estudios Dylnirox™",
      video: "https://www.youtube.com/watch?v=nUr7akHY_18",
      fecha: "2021",
    },
    {
      background: OTclasic,
      encabezado: "OblioN Tycons (Legacy)",
      frase: "Nuestro primer gran proyecto..",
      descripcion:
        "Bienvenido a OblioN Tycons, un software especialmente desarrollado para Invocadores. Como parte del gremio de Invocadores, tu deber es distribuir mercancías por OblioN, lo que beneficia a sus habitantes y a ti. Sin embargo, no todo es tan fácil, y lo veras cuando tus invocaciones se enfrenten a diferentes enemigos en la Colina de las Sombras, donde los contratos colocados por el gremio de invocadores te brindasen de la moneda más valiosa de OblioN, los Fragmentos ARCAICOS. Disfruta de una experiencia tycon, mientras obtienes todas las invocaciones posibles hasta la fecha.",
      empresa: "Estudios Dylnirox™",
      video: "https://www.youtube.com/watch?v=Vue8JLb-XWU",
      fecha: "2021",
    },
    {
      background: OTNoLanzada,
      encabezado: "OblioN Tycons 2.0",
      frase: "Sistema en el olvido.",
      descripcion:
        "La versión 2.0 de OT Edición Estándar buscaba dar un giro total en el diseño de la aplicación y mejorar muchos aspectos de la misma. Sin embargo, esta versión nunca llegó a ver la luz y fue reemplazada posteriormente por OTS Edición Reliquia.",
      empresa: "Estudios Dylnirox™",
      fecha: "2022",
    },
    {
      background: EvaSoftware,
      encabezado: "Eva Software",
      frase: "Migrador de Base de Datos.",
      descripcion:
        "Este sistema es un complemento lanzado por Estudios Dylnirox™ para Oblion Tycons (OT) con la finalidad de poder migrar datos de una base de datos (BD) desactualizada, a una BD acorde a la nueva versión de OT.   Esto, por que en su momento OT no contaba " +
        "con una BD bien estructurada y normalizada, por lo que incluir nuevo contenido afectaba a BD de versiones anteriores. Actualmente este sistema ya no es requerido en la versión mejorada de OT, Oblion Tycons Softwre Edición Reliquia cuenta con una base de " +
        "datos a la que el mismo sistema actualiza, y donde a su vez, recibió una planificación para prevenir cambios y ofrecer una BD mas estable.",
      empresa: "Estudios Dylnirox™",
      video: "https://www.youtube.com/watch?v=6RlV3Kfd794",
      fecha: "2022",
    },
    {
      background: KoobenI,
      encabezado: "K`oóben Inventario 2.0E",
      frase: "El antes y despues de nuestras aplicaciones.",
      descripcion:
        "Gestor de inventario para restaurantes que permite controlar el inventario, tener a la mano las recetas, asignar restricciones a empleados y tener un control sobre las ventas realizadas. Esta aplicación fue desarrollada como proyecto final y evaluada en tres ocasiones. Ahora está disponible de forma gratuita para descargar, probar y puntuar, en la versión mas completa, mejorada, rediseña y optimizada para mejorar la experiencia que KI 1.1.1 ya ofrecía.",
      empresa: "Dylnriox Software™ | K`oóben Software™",
      video: "https://www.youtube.com/watch?v=hXfWXSUi3hw",
      fecha: "2022",
    },
    {
      background: OTS,
      encabezado: "OTS Edicion Reliquia",
      frase: "Mejorando clasicos de DyX.",
      descripcion:
        "Bienvenido a OblioN, la ciudad para invocadores más grande de ArkaNe, aquí podrás trabajar como recolector y comerciante para ganar la mayor cantidad de créditos posibles, o trabajar como invocador combatiendo con las distintas criaturas " +
        " que el gremio a encontrado a los alrededores de OblioN. Conviértete en un guardián prestigiado o en el mas rico de todo el lugar. ",
      empresa: "Dylnirox Software™",
      video: "https://www.youtube.com/watch?v=JuiU9EJAMfs",
      fecha: "2022",
    },
  ];

  const WPF = [
    {
      background: Kaatatik,
      encabezado: "K`aátik Software",
      frase: "Solución personalizada para la gestión de pedidos.",
      descripcion:
        "Nuestro software ha sido diseñado a la medida para optimizar la organización, gestión y control de pedidos. Integra funcionalidades clave como asignación de roles de usuario, personalización de pedidos y seguimiento de ventas. Su interfaz, basada en una paleta de colores pastel y potenciada por aceleración por hardware, ofrece una experiencia visual limpia, armoniosa y ágil, ideal para entornos dinámicos y eficientes.",
      empresa: "Dylnirox Software™",
      video: "https://www.youtube.com/watch?v=Pzo-yHHz6fE",
      fecha: "2023",
    },
    {
      background: Lirix,
      encabezado: "Lirix Store™",
      frase: "Descubriendo sueños.",
      descripcion:
        "Una tienda de aplicaciones elegante propuesta para concursar en INOVATEC, integra las mejores novedades al llevarnos a explorar nuevas formas de desarrollar aplicaciones. Lirix es la primera aplicación que cuenta con objetos dinámicos" +
        " y la posibilidad de descargar otros sistemas desde la nube. Un elegante diseño contrastado con colores oscuros e impulsado con aceleración por Hardware hacen de Lirix el proyecto con mejor UI y UX de DylniroX™. Este proyecto ha sido " +
        " desarrollado por DylniroX Software™ | Azulados y Asociados S.A de C.V.",
      empresa: "Dylnirox Software™ | Azulados y Asociados S.A de C.V",
      video: "https://www.youtube.com/watch?v=D1iiwMrxP68",
      fecha: "2023-2024",
    },
    {
      background: LirixDev,
      encabezado: "Lirix Developer™",
      frase: "Donde los sueños comienzan.",
      descripcion:
      "El complemento ideal para los desarrolladores que publican sus sistemas en nuestra tienda. Con Lirix Dev™, " +
      "accedes a un entorno con herramientas de administración y control para tus aplicaciones, así como utilidades para estar en constante comunicación con tus clientes.",
      empresa: "Dylnirox Software™ | Azulados y Asociados S.A de C.V",
      video: "https://www.youtube.com/watch?v=nxXeYbo8f9E",
      fecha: "2024",
    },
    {
      background: TT,
      encabezado: "ThoughtTrail™ (Legacy)",
      frase: "Camino del pensamiento.",
      descripcion:
        "¿Sabías que ejercitar la mente recordando cosas importantes es beneficioso? Sin embargo, a veces todos necesitamos un poco de ayuda para no olvidar. Por eso, te presentamos nuestra elegante aplicación de notas. Refrescar tus memorias nunca fue tan sencillo.",
      empresa: "Dylnirox Software™ | Dylnirox Desing™",
      video: "https://www.youtube.com/watch?v=XzQ3R_U-hkM",
      fecha: "2023",
    },
    {
      background: MN,
      encabezado: "MIUN",
      frase: "Simulación avanzada de asignación de memoria.",
      descripcion:
        "MIUN es nuestro software educativo diseñado para simular el proceso de asignación de memoria en sistemas operativos. A diferencia de su versión legacy, MIUN incorpora funcionalidades modernas como la creación de procesos en tiempo de ejecución, un sistema completamente libre de bloqueos y una interacción en tiempo real. Todo esto se integra en una interfaz UI/UX optimizada que permite explorar de manera eficiente el comportamiento de cuatro algoritmos de planificación." +
        " Una herramienta ideal para estudiantes de programación que buscan comprender, visualizar y experimentar con los fundamentos de la gestión de memoria en entornos operativos.",
      empresa: "Dylnirox Software™ | Dylnirox Desing™",
      video: "https://www.youtube.com/watch?v=0tY_V7VvkZ8",
      fecha: "2024",
    },
    {
      background: QuillNote,
      encabezado: "Quill Note",
      frase: "¡Haz que cada idea cobre vida con Quill Note!",
      descripcion:
        "Quill Note transforma la forma en que plasmas tus ideas, adaptándose a tu estilo con elegancia. Ahora, no solo incorpora todas las funciones de ThoughtTrail™, sino que las amplifica con herramientas que te permiten organizar pensamientos, guardar imágenes y programar recordatorios para que Quill te los presente justo cuando los necesites." +
        " Llevamos la personalización al siguiente nivel: desde fondos personalizados hasta cambios de tema que redefinen toda la interfaz. Pero eso no es todo, Quill Note ahora viaja contigo entre ordenadores, gracias a la integración con Drive, asegurando que tus notas te acompañen dondequiera que vayas." +
        " Sumérgete en una experiencia envolvente y llena de emoción. ¡Haz que cada idea cobre vida con Quill Note!",
      empresa: "Dylnirox Software™ | Dylnirox Desing™",
      video: "https://www.youtube.com/watch?v=kIST-xa7tQ8",
      fecha: "2024",
    },
    {
      background: LunaHarmony,
      encabezado: "LunaHarmony",
      frase: "Estrellas brillando a tu ritmo.",
      descripcion:
        "Un widget se une a nuestras filas de sistemas. ¿Que se esta escuchando en tu ordenador? luce tus canciones favoritas y controla desde un panel de opciones sencillo el reproductor de musica.",
      empresa: "Dylnirox Software™ | Dylnirox Desing™",
      video: "https://www.youtube.com/watch?v=wRNP8cSA4eY",
      fecha: "2025",
    },
  ];

  const MAUI = [
    {
      background: BajaAudio,
      encabezado: "Baja Audio",
      frase: "Primer acercamiento al desarrollo móvil",
      descripcion:
        "Nuestro debut en el desarrollo móvil fue con una aplicación creada para un negocio dedicado a la renta de equipos de sonido y la organización de eventos. Esta solución permitió una gestión sencilla del inventario, las rentas y los eventos, y fue complementada con su respectiva versión de escritorio para ofrecer una herramienta accesible, rápida y confiable. " +
        "Mientras nuestro equipo se enfocaba en la versión móvil, Azulados y Asociados S.A. de C.V. se encargó del desarrollo de la versión de escritorio, así como del diseño de la base de datos y la configuración del alojamiento en Azure. \n\n" +
        "El resultado fue una aplicación eficiente y adaptable, con potencial para ser portada a iOS, aplicando ajustes estéticos específicos del sistema operativo. Se trata de una solución empresarial hecha a la medida, pensada para resolver necesidades reales en un entorno profesional.",
      empresa:
        "Dylnirox Software™ | Dylnirox Desing™ | Azulados y Asociados S.A de C.V",
      video: "",
      fecha: "2025",
    },
    {
      background: QuillNoteMovil,
      encabezado: "Quill Note Movil",
      frase: "Simple, sencillo, Quill Movil",
      descripcion:
        "Ahora puedes disfrutar de nuestro sistema de notas de forma nativa en dispositivos Android, además de la opción de descargarlo vía APK." +
        " Con una interfaz sencilla y limpia, diseñada por Dylnirox Desing™, podrás gestionar tus ideas de manera óptima y sin complicaciones. La aplicación integra temas predefinidos de tu sistema, ofreciéndote una experiencia visual en modo claro u oscuro para adaptarse a tus preferencias.",
      empresa: "Dylnirox Software™ | Dylnirox Desing™",
      video: "https://www.youtube.com/shorts/etxKFOl34qU",
      fecha: "2025",
    },
  ];

  const NetCores = [
    {
      background: LirixPortal,
      encabezado: "Portal Lirix™",
      frase: "Los sueños viajan por el aire a oidos de muchos",
      descripcion:
        "Un entorno combinado con sistemas que se integran tanto en nuestras plataformas de escritorio como en la web. Accede a las novedades en tiempo real sin necesidad de realizar descargas desde cualquier lugar.",
      empresa: "Dylnirox Software™ | Azulados y Asociados S.A de C.V",
      video: "https://youtu.be/YwekB1pUVJs?si=Z90rJB6eMN3blP5v&t=555",
      fecha: "2024",
    },
  ];

  return (
    <div className="muestrario-container">
      <div className="encabezados-container">
        <h1 className="Encabezado">Descubre algunos de nuestros proyectos</h1>
        <p className="Sub-encabezado">C# | XAML | SQL Sever | MVC</p>
        <p className="Sub-encabezado">
          Aprendiendo: .Net Core | Informix | HTML | CSS | JS | React
        </p>
        <p className="Sub-encabezado">Proximamente: Delphi</p>
      </div>

      <div className="contenedor-muestrario">
        <h1 className="encabezado-elegante2">Proyectos en WinForms</h1>

        <div className="div-seccion">
          {WindosForms.map((app, index) => (
            <div
              key={index}
              className="contenedor-app"
              onClick={() =>
                handleAplicacionClick(
                  app.encabezado,
                  app.frase,
                  app.descripcion,
                  app.empresa
                )
              }
            >
              <Aplicacion
                background={app.background}
                encabezado={app.encabezado}
                parrafo={app.frase}
                descripcion={app.descripcion}
                video={app.video}
                fecha={app.fecha}
              />
            </div>
          ))}
        </div>

        <h1 className="encabezado-elegante2">Proyectos en WPF</h1>

        <div className="div-seccion">
          {WPF.map((app, index) => (
            <div
              key={index}
              className="contenedor-app"
              onClick={() =>
                handleAplicacionClick(
                  app.encabezado,
                  app.frase,
                  app.descripcion,
                  app.empresa
                )
              }
            >
              <Aplicacion
                background={app.background}
                encabezado={app.encabezado}
                parrafo={app.frase}
                descripcion={app.descripcion}
                video={app.video}
                fecha={app.fecha}
              />
            </div>
          ))}
        </div>

        <h1 className="encabezado-elegante2">Proyectos en MAUI</h1>

        <div className="div-seccion">
          {MAUI.map((app, index) => (
            <div
              key={index}
              className="contenedor-app"
              onClick={() =>
                handleAplicacionClick(
                  app.encabezado,
                  app.frase,
                  app.descripcion,
                  app.empresa
                )
              }
            >
              <Aplicacion
                background={app.background}
                encabezado={app.encabezado}
                parrafo={app.frase}
                descripcion={app.descripcion}
                video={app.video}
                fecha={app.fecha}
              />
            </div>
          ))}
        </div>

        <h1 className="encabezado-elegante2">Proyectos en .Net Core</h1>

        <div className="div-seccion">
          {NetCores.map((app, index) => (
            <div
              key={index}
              className="contenedor-app"
              onClick={() =>
                handleAplicacionClick(
                  app.encabezado,
                  app.frase,
                  app.descripcion,
                  app.empresa
                )
              }
            >
              <Aplicacion
                background={app.background}
                encabezado={app.encabezado}
                parrafo={app.frase}
                descripcion={app.descripcion}
                video={app.video}
                fecha={app.fecha}
              />
            </div>
          ))}
        </div>
      </div>

      <h1 className="encabezado-elegante2">Proximamente llegaran mas...</h1>

      <AppDestacada />

      {visible && (
        <div className="div-contenedor-informacion" onClick={handleClick}>
          <div className="div-flotante-fondo" />

          <div className="div-flotante-informacion">
            <div className="div-informacion-encabezado">
              <h1>{info.encabezado}</h1>
              <p>{info.frase}</p>
            </div>
            <div>
              <p className="p-flotante-descripcion">{info.descripcion}</p>
            </div>
            <div className="div-flotante-pie">
              <p>Desarrollado por:</p>
              <p>{info.desarrollador}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Muestrario;
