import axios from "axios";
import { BASE_API } from "../../utils/constants";
// BASE_API = "http://localhost:3003"

//CRUD USUARIOS
//MOSTRAR TODOS LOS USUARIOS
export const MostrarUsuarios = async () => {
    try {
        const usuarios = await axios.get(`${BASE_API}/usuarios/getUsuarios`);
        return usuarios.status === 200 ? usuarios.data : [];
    } catch (error) {
        console.log(error);
    }
}

//CREAR NUEVO USUARIO
export const NuevoUsuario = async (newUsuario) => { 
    try {
        const respuesta = await axios.post(`${BASE_API}/usuarios/createUsuario`, newUsuario);
        return respuesta.status === 201 ? respuesta.data : false;
    } catch (error) {
        console.log(error);
    }
};

//ELIMINAR USUARIO
export const EliminarUsuario = async (UsuarioId) => { 
    try {
        const isDeleted = await axios.delete(`${BASE_API}/usuarios/deleteUsuario/${UsuarioId}`);
        return isDeleted.status === 200 ? true : false;
    } catch (error) {
        console.log(error);
    }
};

