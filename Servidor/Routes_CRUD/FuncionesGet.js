const DataDB = require('../db/Datos.json');

const Meseros = DataDB.Usuarios.filter((m)=> m.Rol === "Mesero");
const Productos = DataDB.Productos;

// Función para obtener el nombre de un mesero por su ID
const getNombreMesero = (meseroId) => {
    const mesero = Meseros.find((m) => m.id === meseroId);
    return mesero ? mesero.Nombre : 'Mesero no encontrado';
};

// Función para obtener los nombres de los productos por sus IDs
const getNombresProductos = (productoIds) => {
    const nombresProductos = productoIds.map((productoId) => {
        const producto = Productos.find((p) => p.id === productoId);
        return producto ? producto.Nombre : 'Producto no encontrado';
    });
    return nombresProductos; // Convierte los nombres en una cadena separada por comas
};

module.exports = {getNombreMesero, getNombresProductos};