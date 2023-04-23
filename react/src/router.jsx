import { createBrowserRouter } from "react-router-dom";
import GuestLayouts from "./components/GuestLayouts";
import Dashboard from "./views/Dashboard";
import Login from "./views/Login";
import Sign_up from "./views/Sign_up";
import Surveys from "./views/Surveys";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
    },
    {
        path: "/surveys",
        element: <Surveys />,
    },
    {
        path: "/",
        element: <GuestLayouts />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/sign-up",
                element: <Sign_up />,
            },
        ],
    },
]);

export default router;
