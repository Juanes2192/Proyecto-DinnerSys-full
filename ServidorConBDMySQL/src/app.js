import express, { json } from "express";
import cors from "cors";

import routerUsuario from "./router/Usuarios.js";
import routerProductos from "./router/Productos.js";
import routerMesas from "./router/Mesas.js";

const app = express();
const port = 3003; //Puerto por el que correra el backend

app.use(json()); //Para que el servidor entienda los datos que le envian en formato json
app.use(cors()); //Para que el servidor acepte peticiones de otros servidores

app.use('/usuarios', routerUsuario);
app.use('/mesas', routerMesas);
app.use('/productos', routerProductos);

app.use((req,res)=>{ //Middleware para manejar rutas no encontradas
    res.status(404).json({Error: "No se encontro la ruta"});
    console.log("No se encontro la ruta");
})

app.listen(port, () => {//Levantamos el servidor
    console.log(`Saludo desde el servidor corriendo en el puerto ${port}`);
});