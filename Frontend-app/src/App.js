import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
import Services from './Components/Services';
import TrendingSection from './Components/TrendingSection';
import GiftCards from './Components/GiftCards';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Signup from './Components/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BookAppointment from './Components/BookAppointment';
import ShopProducts from './Components/ShopProducts';
import Contact from './Components/Contact';
import Teju from './Components/Teju';
import Logout from './Components/Logout';
import Gallery from './Components/Gallery';

// Home Component
function Home() {
    return (
        <>
            <Carousel /> 
            <Services />
            <TrendingSection />
            <GiftCards />
        </>
    );
}

function AppContent() {
    const location = useLocation();
    const hideNavbarFooterRoutes = ["/", "/signup","/login"];

    return (
        <>
            {!hideNavbarFooterRoutes.includes(location.pathname) && <Navbar />}
            
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/services" element={<Services />} />
                <Route path="/shopproducts" element={<ShopProducts />} />
                <Route path="/bookappointment" element={<BookAppointment />} />
                <Route path="/offers" element={<GiftCards />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/Home" element={<Teju />} />
                <Route path="/logout" element={<Logout />} />
                <Route path='/gallery' element={<Gallery />}/>
            </Routes>
            
            {!hideNavbarFooterRoutes.includes(location.pathname) && <Footer />}
        </>
    );
}

// Main App Component
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <AppContent />
            </BrowserRouter>
        </div>
    );
}

export default App;
