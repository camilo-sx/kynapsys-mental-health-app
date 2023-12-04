import { useNavigate } from "react-router-dom";
import logo_desktop from '../../assets/logo-desktop.svg'; 


function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <div className="col-1">
      <img src={logo_desktop} alt="Kynapsys Logo" className="logo-desktop"/>
      </div>
      <div className="col-2">
        <h1>Bienvenido</h1>
        <p className="p-small">Realiza tus pruebas de salud mental cómodamente</p>
        <div className="button-group">
          <button onClick={() => navigate("/login")}>Iniciar Sesión</button>
          <button
            className="btn-register"
            onClick={() => navigate("/register")}
          >
            Registro
          </button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
