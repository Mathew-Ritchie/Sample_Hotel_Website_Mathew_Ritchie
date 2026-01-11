import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import MainLayout from "./pages/MainLayout.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import AccommodationPage from "./pages/AccommodationPage.jsx";
import FacilitiesPage from "./pages/FacilitiesPage.jsx";
import RestaurantPage from "./pages/RestaurantPage.jsx";
import GalleryPage from "./pages/GalleryPage.jsx";
import ContactUsPage from "./pages/ContactUsPage.jsx";
import DynamicRoomInfoPage from "./pages/DynamicRoomInfoPage.jsx";
import DynamicFacilitiesInfoPage from "./pages/DynamicFacilitiesInfoPage.jsx";

export default function App() {
return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainLayout />} >
                <Route index element={<LandingPage />} />
                <Route path="accommodations" element={<AccommodationPage />} />
                  {/* <Route index element={<Navigate to="standard" replace />} /> */}
                <Route path="accommodations/:roomType" element={<DynamicRoomInfoPage />} />
                <Route path="facilities" element={<FacilitiesPage />} />
                <Route path="facilities/:facilityType" element={<DynamicFacilitiesInfoPage />} />
                <Route path="restaurant" element={<RestaurantPage />} />
                <Route path="gallery" element={<GalleryPage />} />
                <Route path="contact-us" element={<ContactUsPage />} />
            </Route>
        </Routes>
    </BrowserRouter>
)



}


