import {GlobalLayout} from "../layouts"
import {HomeAdmin,MenuUsuariosAdmin,MenuProductosAdmin,MenuVentasAdmin} from "../pages/Admin"


const routesAdmin=[
    {
        path:"/admin",
        layout: GlobalLayout,
        component: HomeAdmin,
    },
    {
        path:"/admin/usuarios",
        layout:GlobalLayout,
        component:MenuUsuariosAdmin,
    },
    {
        path:"/admin/productos",
        layout:GlobalLayout,
        component:MenuProductosAdmin,  
    },
    {
        path:"/admin/ventas",
        layout:GlobalLayout,
        component:MenuVentasAdmin, 
    }
];

export default routesAdmin;