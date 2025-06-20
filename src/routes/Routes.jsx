import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello world!</div>,
        children: [
            {
                path: "/",
                element: <div>Home</div>,
            },
            {
                path: "/estate_details",
                element: <div>Estate Details</div>,
            },
            {
                path: "/login",
                element: <div>Login</div>,
            },
            {
                path: "/register",
                element: <div>Register</div>,
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