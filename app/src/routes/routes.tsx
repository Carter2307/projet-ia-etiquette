import { createBrowserRouter, Navigate, Outlet} from "react-router-dom";
import Home from "../app/pages/home";
import AddEtiquette from "../app/pages/etiquettes/page";
import Login from "../app/pages/login";
import React from "react";
import { AuthContext } from "../app/App";


const ProtectedRoute = ({children}: {children: React.ReactNode}) => {
    const {auth} = React.useContext(AuthContext);
    console.log(auth)

    if(!auth?.token ) {
        return <Navigate to={"/login"} replace/>;
     } 
  
 
    return <>{children}</>
  }
  

const router = createBrowserRouter([
    {
        path: "/",
        element:<ProtectedRoute><Home/></ProtectedRoute>
    },
    {
        path: "/etiquettes",
        element:<ProtectedRoute><AddEtiquette/></ProtectedRoute>
    },

    {
        path: "/etiquettes/:id",
        element:<ProtectedRoute><AddEtiquette/></ProtectedRoute>
    },
    {
        path: "/login",
        element:<Login/>
    }
]);

export default router;