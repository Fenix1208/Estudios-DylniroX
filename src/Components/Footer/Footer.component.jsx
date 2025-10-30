import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="contenedor-footer">
      <p>Copyright ©2025 Cardinal de DyX v 3.1.0.0</p>
      <p>
        Estudios DylniroX™ | Dylnirox Software™ | Dylnirox Desing™ | Dylnirox Video™
      </p>
      <p>
        Developer: Ruben Fabian Figueroa Garcia | Egresado ING. Informatica
      </p>
      <p>
        Colaboraciones con Grupo TEC y Azulados S.A | Todos los derechos reservados
        -- |RFFG|
      </p>
      <p>
        <FontAwesomeIcon icon={faYoutube} style={{ color: '#FF0000', marginRight: '5px' }} /> {/* Ícono de YouTube en rojo */}
        @DylniroX-MX | Última actualización: Octubre 2025
      </p>
    </div>
  );
};

export default Footer;