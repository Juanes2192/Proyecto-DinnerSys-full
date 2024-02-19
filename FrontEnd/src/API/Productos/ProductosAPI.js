import { BASE_API } from "../../utils/constants";
// BASE_APID = "http://localhost:3003"
import axios from "axios";

//CRUD DE PRODUCTOS
export const MostrarProductos = async () => {
    try {
        const productos = await axios.get(`${BASE_API}/productos/getProductos`);
        return productos.data;
    } catch (error) {
        console.log(error);
    }
}

//CREAR UN PRODUCTO NUEVO
export const CrearProducto = async (newProducto) =>{
    try {
        const producto = await axios.post(`${BASE_API}/productos/createProducto`, newProducto);
        return producto.status === 201 ? producto.data : null;
    } catch (error) {
        console.log(error);
    }
}

//EDITAR UN PRODUCTO POR SU ID
export const EditarProducto = async (productoId,producto) => { 
    try {
        const isUpdate = await axios.put(`${BASE_API}/productos/updateProducto/${productoId}`, producto)
        return isUpdate.status === 201 ? isUpdate.data : null;
    } catch (error) {
        console.log(error);
    }
};

//ELIMINAR UN PRODUCTO POR SU ID
export const EliminarProducto = async (ProductoId) => { 
    try {
        const isDelete = await axios.delete(`${BASE_API}/productos/deleteProducto/${ProductoId}`);
        return isDelete.status === 200 ? isDelete.data : null;
    } catch (error) {
        console.log(error);
    }
};