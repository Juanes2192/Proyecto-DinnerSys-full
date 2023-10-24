import React,{useState} from 'react';
import "./Home.css";
import Logodinnersys from "../../components/img/Logodinnersys.png";

export function Home() {
  const [userType, setUserType] = useState('');

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Tipo de usuario seleccionado:', userType);
  };
  return (
    <div className='home-container'>
      <img className='logo-image' src={Logodinnersys} alt="logo" />
      <h1 className='home-container__content'>Bienvenidos a DinnerSys</h1>
      <form onSubmit={handleSubmit}>
        Tipo de Usuario:
        <select name="userType" value={userType} onChange={handleUserTypeChange}>
          <option value="">Seleccione una opción</option>
          <option value="administrador">Administrador</option>
          <option value="mesero">Mesero</option>
        </select>
        <button type="submit">Enviar</button>
      </form>
      
    </div>
  )
}
