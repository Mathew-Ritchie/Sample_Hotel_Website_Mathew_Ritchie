import { Outlet } from "react-router-dom";

import Footer from "../components/Footer";
import NavModalHeader from "../components/NavModalHeader";


export default function MainLayout() {
    return (
        <div>
           <NavModalHeader />
            <Outlet />
            {/* Footer component to be added later */}
            <Footer />
        </div>
    );
}