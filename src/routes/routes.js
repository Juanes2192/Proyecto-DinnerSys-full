import routerAdmin from "./routes.admin";
import routerMesero from "./routes.mesero";
import routerHome from "./routes.home"

const routes = [...routerAdmin, ...routerMesero, ...routerHome ];

export default routes;