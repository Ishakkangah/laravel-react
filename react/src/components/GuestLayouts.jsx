import { Outlet } from "react-router-dom";
import { userStateContext } from "../contexts/ContextProvider";
import { Navigate } from "react-router-dom";

export default function GuestLayouts() {
    const { currentUser, userToken } = userStateContext();

    if (userToken) {
        return <Navigate to="/"></Navigate>;
    }

    if (!userToken) {
        return <Navigate to="/login"></Navigate>;
    }
    return (
        <div>
            <>
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"></div>
                <Outlet />
            </>
        </div>
    );
}
