import React, { useState, useEffect } from 'react';
import "./ListadoProductoAdmin.css";
import { BASE_API } from '../../../../../../utils/constants';
import axios from 'axios';

export function ListadoProductoAdmin() {
  const [lstProductos, setLstProductos] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_API}/Productos/MostrarProductos`)
      .then((response) => {
        console.log(response.data);
        setLstProductos(response.data);
      })
      .catch((error) => {
        console.error("Error al traer los productos: ", error);
      });
  }, []);

  return (
    <div className="ListadoProductoAdmin-container"> {/* Agregamos la clase al contenedor */}
      <h1 className="ListadoProductoAdmin-titulo">Listado Productos</h1> {/* Agregamos la clase al título */}
      <ul className="ListadoProductoAdmin-list"> {/* Agregamos la clase a la lista */}
      <li className="user-item user-header">
          <span className="product-label">Nombre</span>
          <span className="product-label">Descripcion</span>
          <span className="product-label">Precio</span>
        </li>
        {lstProductos.map((producto) => (
          <div key={producto.id} className="ListadoProductoAdmin-item"> {/* Agregamos la clase al elemento */}
            <ul>
              <li className="ListadoProductoAdmin-name">{producto.Nombre}</li> {/* Agregamos la clase al nombre */}
              <li className="ListadoProductoAdmin-description">{producto.Descripcion}</li> {/* Agregamos la clase a la descripción */}
              <li className="ListadoProductoAdmin-price">{producto.Precio}</li> {/* Agregamos la clase al precio */}
            </ul>
          </div>
        ))}
      </ul>
    </div>
  );
}
