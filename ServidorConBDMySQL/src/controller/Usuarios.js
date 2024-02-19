import { pool } from '../conexion/conexion.js';
// import { bcrypt } from 'bcryptjs';

const isNum = new RegExp('^[0-9]+$');

//METODO PARA VERFICAR LAS CREDENCIALES Y DARLE ACCESO AL USUARIO
//Funcion para obtener las credenciales de un usuario y usarlas en la funcion de loggin, es con un post porque se envia el usuario por el body
export const verificarCredenciales = async (req, res) => {
    console.log("\n\nFuncion: getCredenciales()");
    try {
        const usuario = req.body.usuario;
        const clave = req.body.clave;

        let [response] = await pool.query(' SELECT U.Nombres, U.Apellidos, D.usuarioId, D.Contrasena, U.TipoUsuario FROM DatosAcceso D \n' +
            'INNER JOIN usuarios U ON U.usuarioId = D.usuarioId WHERE D.Usuario = ?', [usuario]);
        //Lo hacemos [response] para que retorne un objeto y no un arreglo
        if (response) {
            if (response.Contrasena === clave) {
                response = {
                    id: response.usuarioId,
                    Nombre: response.Nombres,
                    Apellido: response.Apellidos,
                    rol: response.TipoUsuario.toLowerCase()
                }
                console.log(response);
                console.log("Usuario encontrado, todo correcto");
                res.status(200).json(response);
            } else {
                res.status(404).json({ Error: 'Contraseña incorrecta' });
            }
        } else {
            res.status(404).json({ Error: 'Usuario no encontrado' });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ Error: 'Error del servidor' });
    }
}

//METODOS PARA OBTENER USUARIOS (METODOS GET)
//Funcion para obtener todos los usuarios
export const getUsuarios = async (req, res) => {
    console.log("\n\nFuncion: getUsuarios()");
    try {
        const usuarios = await pool.query('SELECT * FROM usuarios');
        console.log(usuarios);
        res.status(200).json(usuarios);
    } catch (error) {
        console.log(error);
        res.status(500).json({ Error: 'Error del servidor' });
    }
}

//Funcion para obtener un usuario por su id
export const getUsuarioById = async (req, res) => {
    console.log("\n\nFuncion: getUsuarioById()");
    try {
        const id = req.params.id;
        const usuario = await pool.query('SELECT * FROM usuarios WHERE usuarioId = ?', [id]);
        console.log(usuario);
        res.status(200).json(usuario);
    } catch (error) {
        console.log(error);
        res.status(500).json({ Error: 'Error del servidor' });
    }
}

//Funcion para obtener todos los meseros
export const getMeseros = async (req, res) => {
    console.log("\n\nFuncion: getMeseros()");
    try {
        const Meseros = await pool.query('SELECT * FROM usuarios WHERE LOWER(TipoUsuario) = "mesero"');
        console.log(Meseros);
        res.status(200).json(Meseros);
    } catch (error) {
        console.log(error);
        res.status(500).json({ Error: 'Error del servidor' });
    }
}

// METODO PARA CREAR USUARIO
//Funcion para crear un usuario
export const createUsuario = async (req, res) => {
    console.log("\n\nFuncion: createUsuario()");

    let { Cedula, Nombres, Apellidos, TipoUsuario } = req.body;

    try {
        if (Cedula && Nombres && Apellidos && TipoUsuario) {
            //Verificamos que el campo Cedula contenga caracteres numericos
            if (Cedula.match(isNum) != null) { //Si es diferente de null, es porque si es un numero

                //Verificamos que los campos Nombres y Apellidos tengan al menos 3 caracteres
                if (Nombres.length > 3 || Apellidos.length > 3) {
                    TipoUsuario = TipoUsuario.toLowerCase();
                    //Verificamos que el campo TipoUsuario sea Administrador o Mesero
                    if (TipoUsuario === "administrador" || TipoUsuario === "mesero") {
                        const isInsert = await pool.query('INSERT INTO usuarios (Cedula, Nombres, Apellidos, TipoUsuario) VALUES (?,?,?,?)',
                            [Cedula, Nombres, Apellidos, TipoUsuario]);
                        if (isInsert.affectedRows === 1) {
                            console.log("Usuario creado correctamente");
                            res.status(201).json('Usuario creado');
                        } else {
                            console.log("No fue posible crear el usuario");
                            res.status(409).json({ Error: 'No fue posible crear el usuario' });
                        }
                    } else { // Error en la variable TipoUsuario ingresado
                        console.log("El tipo de usuario debe ser o Administrador, o Mesero");
                        res.status(400).json({ Error: 'El tipo de usuario debe ser o Administrador, o Mesero' });
                    }
                } else { // Error en los Nombres o Apellidos ingresados
                    console.log("Los nombres y apellidos deben tener al menos 3 caracteres");
                    res.status(400).json({ Error: 'Los nombres y apellidos deben tener al menos 3 caracteres' });
                }

            } else { // Error en la Cedula ingresada
                console.log("La cedula no es un numero");
                res.status(400).json({ Error: 'La cedula debe ser un numero sin puntos ni comas' });
            }


        } else {
            console.log("Datos incompletos o ingresados erroneamente");
            res.status(400).json({ Error: 'Datos incompletos' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ Error: 'Error del servidor' });
    }
}

// METODO PARA ACTUALIZAR USUARIO
export const updateUsuario = async (req, res) => {
    console.log("\n\nFuncion: updateUsuario()");
    try {
        const { UsuarioId } = req.params;
        const { Nombres, Apellidos, TipoUsuario } = req.body;
        if (Nombres || Apellidos || TipoUsuario) {
            //El COALESCE() es para que si el campo viene vacio, no lo actualice
            const result = await pool.query('UPDATE usuarios SET ' +
                'Nombres = COALESCE(?, Nombres), Apellidos = COALESCE(?, Apellidos), TipoUsuario = COALESCE(?,TipoUsuario) ' +
                'WHERE usuarioId = ?', [Nombres, Apellidos, TipoUsuario, UsuarioId]);

            console.log(result.affectedRows);//Para saber cuantas filas fueron afectadas, siempre debe decir 1
            if (result.affectedRows === 1) {
                console.log("Usuario actualizado correctamente");
                res.status(200).json({ Message: 'Usuario actualizado correctamente' });
            } else {
                console.log("No fue posible actualizar el usuario porque NO existe");
                res.status(404).json({ Error: `El usuario con el id ${UsuarioId} no existe` });
            }
        } else {
            console.log("No se recibieron datos");
            res.status(400).json({ Error: 'No se recibieron datos' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ Error: 'Error del servidor' });
    }
}

// METODO PARA ELIMINAR USUARIO
export const deleteUsuario = async (req, res) => {
    console.log("\n\nFuncion: deleteUsuario()");
    try {
        const { UsuarioId } = req.params;
        const response = await pool.query('DELETE FROM usuarios WHERE usuarioId = ? ', UsuarioId);
        if (response.affectedRows > 0) {//Tiene que ser siempre 1
            console.log("Usuario eliminado correctamente || ", response.affectedRows, "--> filas afectadas");
            res.status(200).json({ Message: 'Usuario eliminado correctamente' });
        } else {
            console.log("No fue posible eliminar el usuario");
            res.status(400).json({ Error: 'No fue posible eliminar el usuario' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ Error: 'Error del servidor' });
    }
}

/*
Este archivo es el controlador de la tabla usuarios, se encarga de hacer las peticiones a la base de datos y devolver la respuesta al cliente.
Las funciones que tiene son:
- verificarCredenciales: Verifica que el usuario y la contraseña sean correctos
- getUsuarios: Obtiene todos los usuarios
- getUsuarioById: Obtiene un usuario por su id
- getMeseros: Obtiene todos los meseros
- createUsuario: Crea un usuario
- updateUsuario: Actualiza un usuario
- deleteUsuario: Elimina un usuario
*/