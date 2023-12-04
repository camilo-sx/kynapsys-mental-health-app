import { useState } from "react";
import { useNavigate } from "react-router-dom";
import arrow_left from "../../assets/icons/arrow-left.svg";
import logo from "../../assets/logo-color-transparent.svg";
import logo_desktop from "../../assets/logo-desktop.svg";

function Register() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // State of registration step
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    dob: "", // Date of Birth
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setUserData({ ...userData, termsAccepted: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle the submission
  };

  return (
    <div className="auth-container">
      <div className="col-2">
        <nav>
          <div className="navbar-center">
            <div className="nav-button">
                <img onClick={() => navigate(-1)} className="back-button" src={arrow_left} alt="Back" />
         
            </div>

            <img src={logo} alt="Logo" className="centered-logo" />

            <div></div>
          </div>
        </nav>

        <h1>Regístrate</h1>
        <form onSubmit={handleSubmit}>
          {step === 1 ? (
            <>
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                value={userData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={userData.email}
                onChange={handleChange}
              />
              <input
                type="date"
                name="dob"
                value={userData.dob}
                onChange={handleChange}
              />
              <button type="button" onClick={() => setStep(2)}>
                Continuar
              </button>
            </>
          ) : (
            <>
              <input
                type="password"
                name="password"
                placeholder="Contraseña"
                value={userData.password}
                onChange={handleChange}
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirmar Contraseña"
                value={userData.confirmPassword}
                onChange={handleChange}
              />
              <div className="label-tyc">
                <input
                  type="checkbox"
                  name="termsAccepted"
                  checked={userData.termsAccepted}
                  onChange={handleCheckboxChange}
                />
                Aceptar términos y condiciones
              </div>
              <button type="submit">Registrar</button>
            </>
          )}
        </form>
      </div>

      <div className="col-1">
        <div className="large-text">¡Bienvenido a Kynapsys Brain Health!</div>
      </div>
    </div>
  );
}

export default Register;
