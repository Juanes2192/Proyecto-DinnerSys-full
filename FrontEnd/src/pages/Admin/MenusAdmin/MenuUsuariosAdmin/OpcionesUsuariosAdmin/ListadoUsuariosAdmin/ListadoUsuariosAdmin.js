import { useEffect, useState } from 'react';
import { MostrarUsuarios, EliminarUsuario } from '../../../../../../API/Usuarios/UsuariosAPI.js';
import "./ListadoUsuariosAdmin.css";

export function ListadoUsuariosAdmin() {

  const [lstUsuarios, setLstUsuarios] = useState([]);

  useEffect(() => {

    MostrarUsuarios()
      .then((response) => {
        //Si trae una respuesta, envie esa respuesta (data) a la variable lstUsuarios
        if (response) {
          setLstUsuarios(response);
          console.log("Usuarios", response);
        } else {
          alert("No se pudo cargar los usuarios");
        }
      });

  }, []);

  const onHandleDelete = (UsuarioId) => {
    EliminarUsuario(UsuarioId)
      .then((response) => {
        if (response) {
          console.log("Usuario eliminado correctamente");
          alert("Usuario Eliminado");
          setLstUsuarios(lstUsuarios.filter((user) => user.usuarioId !== UsuarioId));
        } else {
          console.log("No se pudo eliminar el usuario");
          alert("No se pudo eliminar el usuario");
        }
      })
  }

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
              <th className="user-label">Acción</th>
            </tr>
          </thead>
          <tbody>
            {lstUsuarios.map((user) => (
              <tr className='' key={user.usuarioId}>
                <td> {user.Cedula} </td>
                <td> {user.Nombres} </td>
                <td> {user.Apellidos} </td>
                <td> {user.TipoUsuario} </td>
                <td>
                  {/* <button className="btn-editar">EDITAR</button> */}
                  <button onClick={() => onHandleDelete(user.usuarioId)} className="btn-eliminar">ELIMINAR</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

