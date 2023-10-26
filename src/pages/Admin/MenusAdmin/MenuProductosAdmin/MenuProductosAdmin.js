import React from 'react';
import "./MenuProductosAdmin.css";
import { useNavigate } from 'react-router-dom';

export function MenuProductosAdmin() {
  const navigate = useNavigate();
  function handleCrearProductoClick() {
      navigate('/admin/productos/crearproductos');
  }

  function handleListadoProductosClick() {
   navigate('/admin/productos/listadoproductos');;
  }

  return (
    <div class="producto-bar">
        <button class="producto-button" onClick={handleCrearProductoClick}>Crear Producto</button>
        <button class="producto-button" onClick={handleListadoProductosClick}>Listado de Productos</button>
    </div> 
  );

}