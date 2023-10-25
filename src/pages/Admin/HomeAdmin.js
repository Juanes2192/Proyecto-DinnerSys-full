import React from 'react';
import "./HomeAdmin.css";
import { useNavigate } from 'react-router-dom';


export function HomeAdmin() {
  const navigate = useNavigate();

  const redirectToUsuario = () => {
    navigate('/admin/usuarios');
  };
  return (
      <div>
        <div className="admin-bar">
          <button className="admin-button" onClick={redirectToUsuario}>Usuario</button>
          <button className="admin-button">Productos</button>
          <button className="admin-button">Ventas</button>
        </div>
      </div>

  );
}