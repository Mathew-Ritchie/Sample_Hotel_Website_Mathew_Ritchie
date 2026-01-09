import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import MainLayout from "./pages/MainLayout.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import AccommodationPage from "./pages/AccommodationPage.jsx";
import FacilitiesPage from "./pages/FacilitiesPage.jsx";
import RestaurantPage from "./pages/RestaurantPage.jsx";
import GalleryPage from "./pages/GalleryPage.jsx";
import ContactUsPage from "./pages/ContactUsPage.jsx";
import RoomInfoPage from "./pages/RoomInfoPage.jsx";

export default function App() {
return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainLayout />} >
                <Route index element={<LandingPage />} />
                <Route path="accommodations" element={<AccommodationPage />} >
                 <Route index element={<Navigate to="standard" replace />} />

   
            <Route path=":roomType" element={<RoomInfoPage />} />
          </Route>
                <Route path="facilities" element={<FacilitiesPage />} />
                <Route path="restaurant" element={<RestaurantPage />} />
                <Route path="gallery" element={<GalleryPage />} />
                 <Route path="contact-us" element={<ContactUsPage />} />
            </Route>
        </Routes>
    </BrowserRouter>
)



}


