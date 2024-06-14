import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ toggleSidebar, isSidebarOpen }) => {
    const navbarStyle = {
        backgroundColor: '#023948',
        color: '#fff',
        padding: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        // position: 'fixed', // Fixed positioning
        top: 0,
        right: 0,
        width: isSidebarOpen ? '80vw' : '100vw',// Adjust width when sidebar is open
        transition: 'width 0.3s ease', 
        marginBottom: "20px",

    };

    return (
        <nav style={navbarStyle}>
            <div>
                <button onClick={toggleSidebar} style={{ backgroundColor: 'transparent', border: 'none', color: '#fff', fontSize: '24px', cursor: 'pointer' }}>☰</button>
            </div>
            <div>
                <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex' }}>

                    <li style={{ marginRight: '20px' }}>
                        <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
                    </li>

                    <li style={{ marginRight: '20px' }}>
                        <Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</Link>
                    </li>

                    <li style={{ marginRight: '20px' }}>
                    <Link to="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</Link>
                    </li>
                    <li>
                        <Link to="/login" style={{ color: '#fff', textDecoration: 'none' }}>Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
