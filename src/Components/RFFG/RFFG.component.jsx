import React from "react";
import Fenix from "../Img/Fenix.jpeg";
import "./RFFG.css";

const RFFG = () => {
  return (
    <div className="div-content">
      <section className="sec-1">
        <img src={Fenix}></img>
        <h2>.Net Developer |RFFG|</h2>
      </section>
      <section className="sec-2">
        <h1>Sobre mi</h1>
        <div className="div-sec2-content">
          <p className="sec-2-text1">
            Soy Rubén Fabián Figueroa García, estudiante de Ingeniería
            Informática con especialidad en Desarrollo de Software, próximo a
            graduarme. Mi enfoque profesional está en el desarrollo de
            aplicaciones de escritorio, aunque también cuento con experiencia en
            entornos web y móviles.
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
        <p>
          Desarrollo soluciones empleando herramientas modernas y versátiles,
          tales como:
          <br /> <br />
          - Frontend: HTML, CSS, JavaScript, Razor
          <br /> <br />
          - UI/UX: XAML, diseño centrado en la experiencia de usuario
          <br /> <br />
          - Backend: C# sobre .NET
          <br /> <br />
          - Bases de datos: SQL Server, Informix
          <br /> <br />- Otras habilidades: Conocimientos básicos en
          estructuración JSON
        </p>
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
            .NET. Por lo que no es ningun problema crear soluciones para diversos entornos.
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
