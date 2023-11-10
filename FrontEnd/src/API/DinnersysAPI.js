import { BASE_API } from "../utils/constants";
// BASE_APID = "http://localhost:3003"
import axios from "axios";

export const MostrarUsuarios = async () => {
    try {
        const usuarios = await axios.get(`${BASE_API}/usuarios/getUsuarios`);
        return usuarios.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const MostrarProductos = async () => {
    try {
        const productos = await axios.get(`${BASE_API}/productos/getProductos`);
        return productos.data;
    } catch (error) {
        console.log(error);
    }
}