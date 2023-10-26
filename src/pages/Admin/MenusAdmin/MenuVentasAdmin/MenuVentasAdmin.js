import React from 'react';
import "./MenuVentasAdmin.css";
import { useNavigate } from 'react-router-dom';

export function MenuVentasAdmin() {
  const navigate = useNavigate();

  function handleListadoVentasClick() {
    navigate('/admin/ventas/Listadoventas');;
   }

  return (
    <div className="Ventas-bar">
    <button className="Ventas-button" onClick={handleListadoVentasClick}>Listado de Ventas</button>
    </div>
  )
}


