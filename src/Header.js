import './Header.css';
import Logo from './images/logo.png';
function Hdr() 
{
  return (
    <div className="Hdr">
            <img className="Logo" src={Logo} alt="Logo" />
            <h1>CADASTRO DE PACIENTES</h1>
    </div>
  )
}

export default Hdr;
