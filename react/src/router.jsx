import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Login from "./views/Login";
import Sign_up from "./views/Sign_up";
import Surveys from "./views/Surveys";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
    },
    {
        path: "/sign-up",
        element: <Sign_up />,
    },
    {
        path: "/surveys",
        element: <Surveys />,
    },
]);

export default router;
