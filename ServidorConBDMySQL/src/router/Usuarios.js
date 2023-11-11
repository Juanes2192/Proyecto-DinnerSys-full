import { Router } from 'express';
const routerUsuario = Router();

import {getUsuarios, getUsuarioById,getMeseros, verificarCredenciales, 
    createUsuario, updateUsuario, deleteUsuario} from '../controller/Usuarios.js';

routerUsuario.post('/loggin', verificarCredenciales);
routerUsuario.get('/getUsuarios', getUsuarios); //Trae todos los usuarios
routerUsuario.get('/getUsuario/:id', getUsuarioById);
routerUsuario.get('/getMeseros', getMeseros);
routerUsuario.post('/createUsuario', createUsuario);
routerUsuario.put('/updateUsuario/:UsuarioId', updateUsuario);
routerUsuario.delete('/deleteUsuario/:UsuarioId', deleteUsuario);

export default routerUsuario;