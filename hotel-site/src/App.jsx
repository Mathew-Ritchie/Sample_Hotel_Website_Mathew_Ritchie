import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainLayout from "./pages/MainLayout.jsx";


export default function App() {
return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainLayout />} />
        </Routes>
    </BrowserRouter>
)



}


