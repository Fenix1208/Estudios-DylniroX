import "./Evento.css";
import MenuLirix from "./EventoIMG/LirixMenu1.png";

const Evento = () => {
  return (
    <div className="main-page-evento">
      <div className="seccion1-evento">
        <div className="seccion1-1-evento">
          <img className="image-Evento" src={MenuLirix} alt="Cardinal" />
        </div>
        <div className="seccion1-2-evento">
          <h1 className="encabezadoPrincipal-evento">Una BETA se acerca</h1>
          <p className="parrado1-evento">
            Estamos planeando lanzar una BETA sobre Lirix™ para probar nuestro
            sistema en operaciones de lógica y en la experiencia UX y UI, antes
            de entrar a la primera etapa de presentación.{" "}
          </p>
        </div>
      </div>

      <div className="seccion2-evento">
        <h1 className="encabezado2-evento">Un evento de demos y pruebas</h1>
      </div>

      <div className="contenedor-cuadros">
        <div className="cuadro">
          <h1>Lirix Store™</h1>
          <p>
            Accede a nuestra versión BETA/Demo, donde podrás visualizar algunos
            sistemas, simular transacciones de compra, personalizar tu perfil y
            explorar las distintas opciones de nuestra tienda.
          </p>
        </div>
        <div className="cuadro">
          <h1>Lirix Developer™</h1>
          <p>
            Accede a nuestra versión BETA/Prueba de Lirix Developer™, donde
            podrás ayudarnos a probar el registro de estudios, registros de
            colaboradores y administración de sistemas.
          </p>
        </div>
        <div className="cuadro">
          <h1>Apuntate.</h1>
          <p>
            Quienes participen pueden simular la carga de sus sistemas, incluso
            si no tienen uno disponible actualmente. Sin embargo, las descargas
            no estarán habilitadas.
            <br /> <br />
            Aquí están algunos detalles importantes:
            <br /> <br /> 1. La publicación de sistemas está disponible solo
            para pruebas de revisión por parte del estudio.
            <br /> <br /> 2. El periodo de prueba es de un mes, y después de
            eso, el sistema se bloqueará.
            <br /> <br /> 3. La base de datos se aloja en nuestros servicios,
            por lo que no necesitas datos reales para los registros; esto es una
            prueba de funcionalidad.
            <br /> <br /> 4. Los datos recopilados seran eliminados tras un
            posible lanzamiento.
            <br /> <br /> 5. El acceso a la Beta se limita y restringe a usuarios de ITT.
          </p>
        </div>
      </div>

      <div className="seccion3-evento">
        <h1 className="encabezado3-evento">
          Detalles de la Beta de Lirix™
        </h1>
        <p>
          La versión beta de Lirix™ estará disponible para pruebas durante 1
          mes. Agradecemos a todos los estudios y desarrolladores que participen
          en esta fase inicial.
        </p>
      </div>

      <div className="contenedor-flexible">
        <div className="cuadroS2">
          <h1>Registro sin Datos Reales</h1>
          <p>
            Durante la beta, no es necesario proporcionar datos reales sobre el
            estudio. Puedes registrar tantos estudios como desees. Nuestro
            equipo validará los registros para asegurarse de que cumplan con las
            normas, excluyendo aquellos que contengan palabras ofensivas.
          </p>
        </div>
        <div className="cuadroS2">
          <h1>Encriptación Pendiente</h1>
          <p>
            Actualmente, la encriptación no está habilitada, lo que significa
            que las credenciales son visibles desde nuestro servidor. No
            incluyas correos ni contraseñas reales en tus registros.
          </p>
        </div>
        <div className="cuadroS2">
          <h1>Creación de Aplicaciones</h1>
          <p>
            Puedes crear aplicaciones reales o ficticias. Aunque las descargas
            no estarán disponibles en Lirix Store™ durante la beta, las
            aplicaciones serán visibles y podrán usarse para simular
            transacciones (solo para probar el funcionamiento de la
            facturación). Esta fase beta no busca obtener beneficios económicos.
          </p>
        </div>
        <div className="cuadroS2">
          <h1>Prueba Completa de Opciones</h1>
          <p>
            Todas las opciones actuales están disponibles para poner a prueba el
            sistema. Queremos asegurarnos de que cada funcionalidad sea evaluada
            exhaustivamente.
          </p>
        </div>
        <div className="cuadroS2">
          <h1>Políticas y Cambios</h1>
          <p>
            La información legal y las políticas presentadas están sujetas a
            cambios según las necesidades y los comentarios de los usuarios.
          </p>
        </div>
        <div className="cuadroS2">
          <h1>Diseño en Evolución</h1>
          <p>
            La presentación de diseño del sistema puede verse afectada en
            futuras actualizaciones. Estamos comprometidos a mejorar la
            experiencia visual y funcional.
          </p>
        </div>
        <div className="cuadroS2">
          <h1>Comentarios Importantes</h1>
          <p>
            Los comentarios proporcionados en los formularios “Funcionalidad de
            la Interfaz”, “Estudio de Mercado para Desarrolladores” y “Estudio
            de Mercado para Clientes” se tendrán en cuenta para las próximas
            mejoras.
          </p>
        </div>
        <div className="cuadroS2">
          <h1>Origen del Proyecto</h1>
          <p>
            Lirix™ es desarrollado por Azulados y Asociados Corp, un equipo de
            proyecto escolar. Nuestro trabajo se ha presentado en Innovatec:
            Feria de Proyectos 2023, en la plataforma de Lirix Store™ para
            escritorio y web.
          </p>
        </div>
        <div className="cuadroS2">
          <h1>Materia Relacionada</h1>
          <p>
            Este proyecto forma parte de la asignatura de Diseño y Evaluación de
            Interfaz de Usuario en el Instituto Tecnológico de Tijuana (ITT) y
            también está destinado a Innovatec 2024.
          </p>
        </div>
      </div>

      <div className="seccion-pie-evento">
        <h1>Los sueños viajan por el aire con Lirix™</h1>
        <p className="parrafo-familia">
          Solicita acceso: soportelirix.mx@gmail.com
        </p>
        <p className="parrafo-familia">Visitanos en Youtube: @lirixStore</p>
        <a href="https://jessdvd.github.io/">
          ¿Mas información? visita este sitio
        </a>
      </div>
    </div>
  );
};

export default Evento;
