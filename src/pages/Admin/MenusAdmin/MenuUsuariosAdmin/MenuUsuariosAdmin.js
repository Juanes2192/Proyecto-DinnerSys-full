import React from 'react';
import "./MenuUsuariosAdmin.css";
import { useNavigate } from 'react-router-dom';

export function MenuUsuariosAdmin() {
  const navigate = useNavigate();
  function handleCrearUsuarioClick() {
      navigate('/admin/usuarios/crearusuarios');
  }

  function handleListadoUsuariosClick() {
    navigate('/admin/usuarios/listadousuarios');
  }

  return (
    <div className="usuario-bar">
        <button className="usuario-button" onClick={handleCrearUsuarioClick}>Crear Usuario</button>
        <button className="usuario-button" onClick={handleListadoUsuariosClick}>Listado de Usuarios</button>
    </div> 
  );

}

