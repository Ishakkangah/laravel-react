import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
    return (
        <div>
            part of layout
            <Outlet />
        </div>
    );
}
