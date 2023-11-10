import { useState, useEffect } from 'react';
import "./ListadoProductoAdmin.css";
import { MostrarProductos } from '../../../../../../API/DinnersysAPI';

export function ListadoProductoAdmin() {
  const [lstProductos, setLstProductos] = useState([]);

  useEffect(() => {
    MostrarProductos()
      .then((response) => {
        console.log(response);
        setLstProductos(response);
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
          <div key={producto.ProductoId} className="ListadoProductoAdmin-item"> {/* Agregamos la clase al elemento */}
            <ul>
              <li className="ListadoProductoAdmin-name">{producto.Nombre}</li> {/* Agregamos la clase al nombre */}
              <li className="ListadoProductoAdmin-description">{producto.Descripcion}</li> {/* Agregamos la clase a la descripción */}
              <li className="ListadoProductoAdmin-name">{producto.Categoria}</li>
              <li className="ListadoProductoAdmin-price">{producto.Precio}</li> {/* Agregamos la clase al precio */}
            </ul>
          </div>
        ))}
      </ul>
    </div>
  );
}
