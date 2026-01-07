import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainLayout from "./pages/MainLayout.jsx";
import LandingPage from "./pages/LandingPage.jsx";

export default function App() {
return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainLayout />} >
                <Route index element={<LandingPage />} />
            </Route>
        </Routes>
    </BrowserRouter>
)



}


