import { useState, useEffect } from 'react';
import "./ListadoUsuariosAdmin.css"
import axios from 'axios';
import { BASE_API } from '../../../../../../utils/constants';

export function ListadoUsuariosAdmin() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_API}/Usuarios/MostrarUsuarios`)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error al traer datos: ", error);
      })
  }, [])

  return (
    <div className="container">
    <h1 className='Titulo'>Listado de Usuarios</h1>
    <div className="user-list-container">
      <ul className="user-list">
        <li className="user-item user-header">
          <span className="user-label">Nombre</span>
          <span className="user-label">Rol</span>
        </li>
        {data.map((user) => (
          <li key={user.id} className="user-item">
            <div className="user-name">{user.Nombre}</div>
            <div className="user-role">{user.Rol}</div>
          </li>
        ))}
      </ul>
    </div>
  </div>
  );
}

