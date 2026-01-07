import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainLayout from "./pages/MainLayout.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import AccommodationPage from "./pages/AccommodationPage.jsx";
import FacilitiesPage from "./pages/FacilitiesPage.jsx";

export default function App() {
return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainLayout />} >
                <Route index element={<LandingPage />} />
                <Route path="accommodations" element={<AccommodationPage />} />
                <Route path="facilities" element={<FacilitiesPage />} />
            </Route>
        </Routes>
    </BrowserRouter>
)



}


