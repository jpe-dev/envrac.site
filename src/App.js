import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
    Accueil,
    Booking,
    Contact,
    Docs,
    Portfolio,
    Presentation,
    Services /*Cours*/,
} from "./pages";

import "./App.css";
import "./responsive.css";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Accueil />} />
                <Route path='/presentation' element={<Presentation />} />
                <Route path='/services' element={<Services />} />
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/booking' element={<Booking />} />
                <Route path='/docs' element={<Docs />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
