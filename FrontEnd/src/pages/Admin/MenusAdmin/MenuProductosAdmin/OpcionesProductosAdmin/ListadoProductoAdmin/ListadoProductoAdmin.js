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
    <div className="ListadoProductoAdmin-container">
  <h1 className="ListadoProductoAdmin-titulo">Listado Productos</h1>
  <table className="ListadoProductoAdmin-table">
    <thead>
      <tr className="user-header">
        <th className="product-label">Nombre</th>
        <th className="product-label">Descripción</th>
        <th className="product-label">Categoría</th>
        <th className="product-label">Precio</th>
      </tr>
    </thead>
    <tbody>
      {lstProductos.map((producto) => (
        <tr key={producto.ProductoId} className="ListadoProductoAdmin-item">
          <td className="ListadoProductoAdmin-name">{producto.Nombre}</td>
          <td className="ListadoProductoAdmin-description">{producto.Descripcion}</td>
          <td className="ListadoProductoAdmin-category">{producto.Categoria}</td>
          <td className="ListadoProductoAdmin-price">{producto.Precio}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  );
}
