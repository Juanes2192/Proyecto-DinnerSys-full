import React from 'react';
import "./HomeAdmin.css";
import { useNavigate } from 'react-router-dom';


export function HomeAdmin() {
  const navigate = useNavigate();

  const redirectToUsuario = () => {
    navigate('/admin/usuarios');
  };

  const redirectToProductos = () => {
    navigate('/admin/productos');
  };

  const redirectToVentas = () => {
    navigate('/admin/ventas');
  };
  
  return (
      <div>
        <div className="admin-bar">
          <button className="admin-button" onClick={redirectToUsuario}>Usuario</button>
          <button className="admin-button" onClick={redirectToProductos}>Productos</button>
          <button className="admin-button" onClick={redirectToVentas}>Ventas</button>
        </div>
      </div>
  );
}