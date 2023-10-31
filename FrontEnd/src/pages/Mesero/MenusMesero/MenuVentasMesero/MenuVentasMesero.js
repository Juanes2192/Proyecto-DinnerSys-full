import React from 'react';
import "./MenuVentasMesero.css"; // Asegúrate de tener los estilos correctos para MenuVentasMesero
import { useNavigate } from 'react-router-dom';

export function MenuVentasMesero() {
  const navigate = useNavigate();

  function handleCrearVentaClick() {
    navigate('/mesero/ventas/crearventas'); // Ajusta la ruta a la que deseas redirigir para crear una venta.
  }

  function handleListadoVentasClick() {
    navigate('/mesero/usuarios/listadoventas'); // Ajusta la ruta a la que deseas redirigir para el listado de ventas.
  }

  return (
    <div className="ventas-bar">
      <button className="ventas-button" onClick={handleCrearVentaClick}>Crear Venta</button>
      <button className="ventas-button" onClick={handleListadoVentasClick}>Listado de Ventas</button>
    </div>
  );
}