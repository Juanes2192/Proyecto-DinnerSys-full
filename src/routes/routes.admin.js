import {GlobalLayout} from "../layouts"
import {HomeAdmin} from "../pages/Admin"


const routesAdmin=[
    {
        path:"/admin",
        layout: GlobalLayout,
        component: HomeAdmin,
    }
];

export default routesAdmin;