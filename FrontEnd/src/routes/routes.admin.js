import {GlobalLayout} from "../layouts"
import {HomeAdmin,MenuUsuariosAdmin,MenuProductosAdmin,MenuVentasAdmin,CrearUsuarioAdmin,ListadoUsuariosAdmin,
ListadoProductoAdmin,CrearProductoAdmin,ListadoVentasAdmin} from "../pages/Admin"


const routesAdmin=[
    {
        path:"/admin",
        layout: GlobalLayout,
        component: HomeAdmin,
    },
    //Empieza ruta de USUARIOS
    {
        path:"/admin/usuarios",
        layout:GlobalLayout,
        component:MenuUsuariosAdmin,
    },
    {
        path:"/admin/usuarios/crearusuarios",
        layout:GlobalLayout,
        component:CrearUsuarioAdmin,
    },
    {
        path:"/admin/usuarios/listadousuarios",
        layout:GlobalLayout,
        component:ListadoUsuariosAdmin,
    },
    //Empieza ruta de PRODUCTOS
    {
        path:"/admin/productos",
        layout:GlobalLayout,
        component:MenuProductosAdmin,  
    },
    {        
        path:"/admin/productos/listadoproductos",
        layout:GlobalLayout,
        component:ListadoProductoAdmin,
    },
    {
        path:"/admin/productos/crearproductos",
        layout:GlobalLayout,
        component:CrearProductoAdmin,
    },
    {
        path:"/admin/productos/editarproductos",
        layout:GlobalLayout,
        component:CrearProductoAdmin,
    },
    //Empieza ruta de VENTAS
    {
        path:"/admin/ventas",
        layout:GlobalLayout,
        component:MenuVentasAdmin, 
    },
    {
        path:"/admin/ventas/listadoventas",
        layout:GlobalLayout,
        component:ListadoVentasAdmin, 
    }
];

export default routesAdmin;