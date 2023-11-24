import axios from "axios";
import { BASE_API } from "../../utils/constants";

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

//Mostrar Todos Los Usuarios
export const MostrarUsuarios = async () => {
    try {
        const usuarios = await axios.get(`${BASE_API}/usuarios/getUsuarios`);
        return usuarios.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

//METODO CREATE 
//Crear Usuario
export const CrearUsuario = async (newUser) => { 
    try {
        const isInsert = await axios.post(`${BASE_API}/usuarios/createUsuario`, newUser);
        return isInsert.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};