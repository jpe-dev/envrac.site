import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil/Accueil';
import Presentation from './pages/Presentation/Presentation';
import Services from './pages/Services/Services';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';
import Booking from './pages/Booking/Booking';
import Docs from './pages/Docs/Docs';
import './App.css';

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
