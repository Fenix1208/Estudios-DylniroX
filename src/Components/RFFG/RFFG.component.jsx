import React from "react";
import Fenix from "../Img/Fenix.jpeg";
import "./RFFG.css";

const RFFG = () => {
  return (
    <div className="div-content">
      <section className="sec-1">
        <img src={Fenix} alt="Fenix" />
        <h2>.Net Developer |RFFG|</h2>
      </section>
      <section className="sec-2">
        <h1>Sobre mi</h1>
        <div className="div-sec2-content">
          <p className="sec-2-text1">
            Mi nombre es Rubén Fabián Figueroa García, egresado de la carrera de
            Ingeniería Informática con especialidad en Desarrollo de Software.
            Mi trayectoria profesional se ha centrado principalmente en el
            desarrollo de aplicaciones de escritorio, complementada con
            experiencia en entornos web y móviles. Me caracterizo por un enfoque
            orientado a la calidad, la eficiencia y la mejora continua en cada
            proyecto que emprendo.
          </p>
          <p className="sec-2-text2">
            Trabajo principalmente con C# y .NET, lo que me ha permitido
            desarrollar soluciones multiplataforma:
            <br /> <br />
            - Aplicaciones de escritorio (WPF)
            <br /> <br />
            - Aplicaciones móviles híbridas (MAUI)
            <br /> <br />- Aplicaciones web (ASP.NET Core, Razor)
          </p>
        </div>
      </section>
      <section className="sec-3">
        <h1>Tecnologías y herramientas</h1>
        <ul className="tech-list">
          <li>
            <strong>Frontend:</strong> HTML, CSS, JavaScript, Razor, React, JSX
          </li>
          <li>
            <strong>UI/UX:</strong> XAML (WPF y MAUI), diseño centrado en la experiencia de usuario
          </li>
          <li>
            <strong>Backend:</strong> C# sobre .NET Framework 4.7.2 y .NET Core
          </li>
          <li>
            <strong>Desarrollo de escritorio:</strong> WPF con C# y XAML (.NET Framework)
          </li>
          <li>
            <strong>Desarrollo móvil:</strong> MAUI con C# y XAML, experiencia previa con React Native
          </li>
          <li>
            <strong>Desarrollo web:</strong> ASP.NET MVC, .NET Core, integración de Razor con HTML, CSS y JS
          </li>
          <li>
            <strong>Bases de datos:</strong> SQL Server, Informix
          </li>
          <li>
            <strong>Otras habilidades:</strong> Estructuración y manejo de archivos JSON
          </li>
          <li>
            <strong>Entornos de desarrollo:</strong> Visual Studio 2019 y 2022, Visual Studio Code
          </li>
          <li>
            <strong>Experiencia adicional:</strong> Breve uso de Eclipse (descartado por preferencia personal)
          </li>
        </ul>
      </section>
      <section className="sec-4">
        <h1>Mi muestrario</h1>
        <p>
          En los últimos 4 años he diseñado y desarrollado más de 20
          aplicaciones de escritorio, con el objetivo de perfeccionar mis
          habilidades técnicas. Estas aplicaciones no solo resuelven problemas
          funcionales, también integran interfaces cuidadosamente diseñadas que
          mejoran la experiencia del usuario.
          <br /> <br />
          Me destaco por mi atención al detalle en diseño de interfaces UI y por
          ofrecer soluciones visualmente atractivas y funcionales enfocadas en
          entornos empresariales.
        </p>
      </section>
      <section className="sec-5">
        <h1>Mi marca: Estudios Dylnirox™</h1>
        <div className="div-sec5-content">
          <p>
            Estudios Dylnirox™ es mi sello personal. Bajo esta firma he lanzado
            más de 5 sistemas de escritorio disponibles al público. Nuestra
            filosofía como marca es clara
          </p>
          <p>
            Crear aplicaciones que cautiven a primera vista, enamoren en su uso
            y se queden contigo por lo bien que funcionan.
          </p>
          <p>
            Diseñamos pensando en los pequeños detalles, en la sutileza, en esa
            sensación de comodidad que da usar algo bien hecho. Porque ser
            productivo es igual a sentirse bien.
          </p>
        </div>
      </section>
      <section className="sec-6">
        <div>
          <h1>Actualmente</h1>
          <p>
            Nos especializamos en desarrollo de software para escritorio en
            Windows. Sin embargo, también estamos evolucionando hacia
            plataformas móviles y servicios web, siempre bajo el ecosistema
            .NET. Por lo que no es ningun problema crear soluciones para
            diversos entornos.
          </p>
        </div>
        <div>
          <h1>|RFFG|</h1>
          <p>
            “Lo que no sepa, lo aprendo; y lo que ya sé, lo refuerzo. El único
            límite es aquello que no conozco… y siempre estoy descubriendo algo
            nuevo.”
          </p>
        </div>
      </section>
    </div>
  );
};

export default RFFG;
