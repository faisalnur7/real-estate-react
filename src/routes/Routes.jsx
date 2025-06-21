import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import EstateDetails from "../pages/EstateDetails";
import NotFound from "../pages/NotFound";
import Estates from "../pages/Estates";
import About from "../pages/About";


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
                element: <Estates />,
                loader: () => fetch('/luxuryEstates.json'),
            },
            {
                path: "/estate_details/:id",
                element: <PrivateRoute><EstateDetails /></PrivateRoute>,
            },
            {
                path: "/about",
                element: <About />,
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
                path: "*",
                element: <NotFound />,
            },
            {
                path: "/Profile",
                element: <PrivateRoute><Profile /></PrivateRoute>,
            },
        ],
    },
]);

export default router;