const express = require('express');
const DataDB = require('../db/Datos.json');
const relacionProductoYMesero = require('./FuncionesGet');
const router = express.Router();


// Traer Meseros 
let Meseros = DataDB.Usuarios.filter((mesero) => mesero.Rol === "Mesero");
Meseros = Meseros;

// Traer Administradores 
let Admin = DataDB.Usuarios.filter((admin) => admin.Rol === "Admin");
Admin = Admin;

//Traer Usuarios
const Usuarios = DataDB.Usuarios;

//Traer todos los productos
const Productos = DataDB.Productos;

//Traer todas las ventas
const Ventas = DataDB.Ventas;

// GET USUARIOS
//Traer todos los Usuarios
router.get("/Usuarios/MostrarUsuarios", (req, res) => {
    res.status(200).json(Usuarios);
});

// Traer todos los Meseros
router.get("/Usuarios/MostrarMeseros", (req, res) => {
    res.status(200).json(Meseros);
});

// Traer todos los Administradores
router.get("/usuarios/MostrarAdmins", (req, res) => {
    res.status(200).json(Admin);
});


//GET PRODUCTOS
// Traer Todos los Productos
router.get("/Productos/MostrarProductos", (req, res) => {
    res.status(200).json(Productos);
});

// GET VENTAS
// Traer Todas las ventas
router.get("/Ventas/MostrarVentas", (req, res) => {
    let precio=0;

    const ventasConDetalles = Ventas.map((venta) => ({
        ...venta,
        MeseroEncargado: relacionProductoYMesero.getNombreMesero(venta.MeseroId),
        lstProductos: relacionProductoYMesero.getNombresProductos(venta.ProductosIds),
      }));
      res.status(200).json(ventasConDetalles);
});

// Traer Todas las ventas por mesero
router.get("/Ventas/VentasXMesero", (req, res) => {
    const MsroId = parseInt(req.query.MsroId);
    console.log(MsroId);
    if (isNaN(MsroId)) {
        res.status(400).json({ error: 'El parametro MeseroId es invalido' })
    } else {
        const VentasXMsro = DataDB.Ventas.filter((ventas) => ventas.MeseroId === MsroId);
        if(VentasXMsro.length>0){
            res.status(200).json(VentasXMsro);
        }else{
            res.status(404).json({error: "El mesero no tiene ventas"});
        }
    }
});

module.exports = router;


