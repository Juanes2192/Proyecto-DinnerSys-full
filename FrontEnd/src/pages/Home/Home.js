import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import "./Home.css";
import Logodinnersys from "../../components/img/Logodinnersys.png";
import fondologin from "../../components/img/fondologin.jpg";



export function Home() {
  const [userType, setUserType] = useState('');
  const navigate = useNavigate(); // Inicializa navigate

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Tipo de usuario seleccionado:', userType);

    if (userType === 'administrador') {
      navigate('/admin'); // Navega a la ruta '/admin' usando useNavigate
    }

    if (userType === 'mesero') {
      navigate('/mesero'); // Navega a la ruta '/admin' usando useNavigate
    }
  };


  return (
    <div className='home-container'>
      <img className='inicio-image' src={fondologin} alt="fondo" />
      <div className="form-container"> {/* Agrega la clase form-container aquí */}
        <form onSubmit={handleSubmit}>
          <div className="logo-container">
            <img className='logo-image' src={Logodinnersys} alt="logo" />
          </div>
          <h1 className='home-container__content'>Bienvenidos a DinnerSys</h1>
          Tipo de Usuario:
          <select name="userType" value={userType} onChange={handleUserTypeChange}>
            <option value="">Seleccione una opción</option>
            <option value="administrador">Administrador</option>
            <option value="mesero">Mesero</option>
          </select>
          <div className="button-container">
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  )
  
}
