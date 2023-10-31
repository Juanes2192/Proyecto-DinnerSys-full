import React from 'react';
import "./HomeMesero.css"; // Asegúrate de tener los estilos correctos para HomeMesero
import { useNavigate } from 'react-router-dom';

export function HomeMesero() {
  const navigate = useNavigate();

  const redirectToVentas = () => {
    navigate('/mesero/ventas'); // Ajusta la ruta a la que deseas redirigir para las mesas.
  };

  return (
    <div>
      <div className="mesero-bar">
        <button className="mesero-button" onClick={redirectToVentas}>Ventas</button>
      </div>
    </div>
  );
}


///////////////////////

