import { useEffect, useState } from 'react';
import "./ListadoUsuariosAdmin.css"
import { MostrarUsuarios } from '../../../../../../API/Usuarios/UsuariosAPI.js';

export function ListadoUsuariosAdmin() {

  const [lstUsuarios, setLstUsuarios] = useState([]);

  useEffect(() => {

    MostrarUsuarios() 
      .then((response) => {
        //Si trae una respuesta, envie esa respuesta (data) a la variable lstUsuarios
        setLstUsuarios(response)
      }).catch((error) => {
        console.log("Error al traer los usuarios", error);
      });

  }, []);

  return (
    <div className="container">
      <div className="user-list-container">
        <h1 className='Titulo'>Listado de Usuarios</h1>
        <table className="user-list">
          <thead>
            <tr className="user-header">
              <th className="user-label">Cedula</th>
              <th className="user-label">Nombres</th>
              <th className="user-label">Apellidos</th>
              <th className="user-label">Tipo Usuario</th>
            </tr>
          </thead>
          <tbody>
            {lstUsuarios.map((user)=>(
              <tr className='' key={user.usuarioId}>
                <td> {user.Cedula} </td>
                <td> {user.Nombres} </td>
                <td> {user.Apellidos} </td>
                <td> {user.TipoUsuario} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

