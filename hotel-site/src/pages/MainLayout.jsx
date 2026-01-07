import NavModalHeader from "../components/NavModalHeader";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <div>
           <NavModalHeader />
            <Outlet />
            {/* Footer component to be added later */}
            <footer></footer>
        </div>
    );
}