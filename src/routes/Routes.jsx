import {createBrowserRouter} from "react-router-dom";
import {Login} from "../views/Login.jsx";


export const router = createBrowserRouter([

    {
        path:'/login',
        element: <Login/>
    }


    ]);
