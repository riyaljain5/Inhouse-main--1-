import React from 'react';

const Sidebar = ({ isOpen }) => {
    const sidebarStyle = {
        display: 'block',
        backgroundColor: '#f4f4f4',
        color: '#333',
        width: '20vw',
        position: 'fixed',
        top: '0',
        bottom: '0',
        left: isOpen ? '0' : '-20vw', // Slide in the sidebar when isOpen is true
        transition: 'left 0.5s cubic-bezier(0.23, 1, 0.32, 1)', // Smooth transition using cubic-bezier
    };

    return (
        <aside style={sidebarStyle}>
            <ul style={{ listStyleType: 'none', padding: 0 }} className='mt-5'>
                <li style={{ marginBottom: '10px' }}><a href="/">Dashboard</a></li>
                <li style={{ marginBottom: '10px' }}><a href="/profile">Profile</a></li>
                <li><a href="/settings">Settings</a></li>
            </ul>
        </aside>
    );
}

export default Sidebar;
