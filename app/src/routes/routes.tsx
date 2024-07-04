import { createBrowserRouter} from "react-router-dom";
import Home from "../app/pages/home";
import AddEtiquette from "../app/pages/etiquettes/page";

const router = createBrowserRouter([
    {
        path: "/",
        element:<Home/>
    },
    {
        path: "/etiquettes",
        element: <AddEtiquette/>
    }
]);

export default router;