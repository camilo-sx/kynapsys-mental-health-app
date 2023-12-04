import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../../assets/logo-color-transparent.svg';
import logo_desktop from '../../assets/logo-desktop.svg';

function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle the login submission
  }

  return (
    <div className="auth-container">
       <div className="col-1">
      <img src={logo_desktop} alt="Kynapsys Logo" className="logo-desktop"/>
      </div>

      <nav>
        <button onClick={() => navigate(-1)}>Back</button>
        <img src={logo} alt="Logo" className="centered-logo"/>
      </nav>
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          value={loginData.email} 
          onChange={handleChange} 
        />
        <input 
          type="password" 
          name="password" 
          placeholder="Contraseña" 
          value={loginData.password} 
          onChange={handleChange} 
        />
        <Link to="/password-recovery">Olvidé mi contraseña</Link>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
}

export default Login;
