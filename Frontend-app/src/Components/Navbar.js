import React, { useState } from 'react';
import './Navbar.css';
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const navigate = useNavigate();

    const projectData = [
        { name: "Home", path: "/home" },
        { name: "Services", path: "/services" },
        { name: "Shop Products", path: "/shopproducts" },
        { name: "Book Appointment", path: "/bookappointment" },
        { name: "Offers", path: "/offers" },
        { name: "Contact Us", path: "/contact" },
        { name: "Gallery", path: "/gallery" },
        { name: "Logout", path: "/logout" }, 
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);

        if (query) {
            const results = projectData.filter((item) =>
                item.name.toLowerCase().includes(query)
            );
            setSearchResults(results);
        } else {
            setSearchResults([]);
        }
    };

    const handleResultClick = (path) => {
        navigate(path);
        setSearchQuery("");
        setSearchResults([]);
    };

    const handleLogout = () => {
        localStorage.removeItem('token'); // Clear any authentication token
        navigate('/login'); // Redirect to login
    };

    return (
        <nav className="nav1">
            <h3>Hair Envy Studio</h3>
            <button className="hamburger" onClick={toggleMenu}>☰</button>
            <ul className={`nav2 ${isMenuOpen ? 'open' : ''}`}>
                {projectData.map((item, index) => (
                    <li key={index}>
                        {item.name === "Logout" ? (
                            <button onClick={handleLogout} className="logout-button">
                                {item.name.toUpperCase()}
                            </button>
                        ) : (
                            <Link to={item.path}>{item.name.toUpperCase()}</Link>
                        )}
                    </li>
                ))}
            </ul>
            <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
                <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={searchQuery}
                    onChange={handleSearch}
                />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            {searchResults.length > 0 && (
                <div className="search-results">
                    <ul>
                        {searchResults.map((result, index) => (
                            <li
                                key={index}
                                onClick={() => handleResultClick(result.path)}
                                className="search-item"
                            >
                                {result.name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
