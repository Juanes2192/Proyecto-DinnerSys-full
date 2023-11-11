import { BASE_API } from "../utils/constants";
// BASE_APID = "http://localhost:3003"
import axios from "axios";

//CRUD DE USUARIOS
export const Loggin = async (usuario, clave) => {
    try {
        const usuarios = await axios.post(`${BASE_API}/usuarios/loggin`, {usuario, clave})
        return usuarios.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const MostrarUsuarios = async () => {
    try {
        const usuarios = await axios.get(`${BASE_API}/usuarios/getUsuarios`);
        return usuarios.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}


//CRUD DE PRODUCTOS
export const MostrarProductos = async () => {
    try {
        const productos = await axios.get(`${BASE_API}/productos/getProductos`);
        return productos.data;
    } catch (error) {
        console.log(error);
    }
}

export const CrearProducto = async (newProducto) =>{
    try {
        const producto = await axios.post(`${BASE_API}/productos/createProducto`, newProducto);
        return producto.data;
    } catch (error) {
        console.log(error);
    }
}