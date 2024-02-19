import { useState, useEffect } from 'react';
import "./ListadoProductoAdmin.css";
import { MostrarProductos, EliminarProducto } from '../../../../../../API/Productos/ProductosAPI';
import { useNavigate } from 'react-router-dom';

export function ListadoProductoAdmin() {

  const navigate = useNavigate();

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

  const onDelete = (ProductoId) => {
    EliminarProducto(ProductoId)
      .then((response) => {
        console.log(response);
        if (response) {
          alert("Producto eliminado correctamente");
          setLstProductos(lstProductos.filter(producto => producto.ProductoId !== ProductoId));
        } else {
          alert("Error al eliminar el producto");
        }
      })
  };

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
            <th className="product-label">Acción</th>
          </tr>
        </thead>
        <tbody>
          {lstProductos.map((producto) => (
            <tr key={producto.ProductoId} className="ListadoProductoAdmin-item">
              <td className="ListadoProductoAdmin-name">{producto.Nombre}</td>
              <td className="ListadoProductoAdmin-description">{producto.Descripcion}</td>
              <td className="ListadoProductoAdmin-category">{producto.Categoria}</td>
              <td className="ListadoProductoAdmin-price">{producto.Precio}</td>
              <td>
                <button onClick={() => navigate('/admin/productos/editarproductos', { state: { titulo: "Editar Producto", data: producto } })} className="btn-editar">EDITAR</button>
                <button onClick={() => onDelete(producto.ProductoId)} className="btn-eliminar">ELIMINAR</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  );
}
