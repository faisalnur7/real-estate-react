import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('/luxuryEstates.json'),
            },
            {
                path: "/properties",
                element: <div>Properties</div>,
            },
            {
                path: "/about",
                element: <div>About</div>,
            },
            {
                path: "/contact",
                element: <div>Contact</div>,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/not_found",
                element: <div>Not found</div>,
            },
            {
                path: "/Profile",
                element: <PrivateRoute><div>Profile</div></PrivateRoute>,
            },
        ],
    },
]);

export default router;