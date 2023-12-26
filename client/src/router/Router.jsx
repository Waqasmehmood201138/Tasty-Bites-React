import { createBrowserRouter, } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/home/Home";
import Menu from "../Pages/shop/Menu";
import { Signup } from "../components/Signup";
import UpdateProfile from "../Pages/dashboard/UpdateProfile";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/menu",
                element: <Menu />
            },
            {
                path: "/update-profile",
                element: <UpdateProfile />
            }
        ]
    },

    {
        path: "/signup",
        element: <Signup />
    }
]);

export default router