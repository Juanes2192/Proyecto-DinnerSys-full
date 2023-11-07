import {MeseroLayout} from "../layouts";
import {HomeMesero,MenuVentasMesero,CrearVentaMesero,ListadoVentaMesero} from "../pages/Mesero";


const routesMesero=[
    {
        path:"/mesero",
        layout: MeseroLayout,
        component: HomeMesero,
    },
    {
        path:"/mesero/ventas",
        layout:MeseroLayout,
        component:MenuVentasMesero,
    },
    {
        path:"/mesero/ventas/crearventas",
        layout:MeseroLayout,
        component:CrearVentaMesero,
    },
    {
        path:"/mesero/ventas/listadoventas",
        layout:MeseroLayout,
        component:ListadoVentaMesero,
    },
];

export default routesMesero;

