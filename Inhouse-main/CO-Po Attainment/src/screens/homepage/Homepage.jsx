import React, { useState } from 'react'
import Navbar from '../nav/Navbar'
import Sidebar from '../nav/Sidebar'
import Login from '../login/register/Login';
import Header from '../../Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../../Components/Home';

function Homepage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
    

  
    return (
    <div className='vh-100 vw-100 container-fluid'style={{ backgroundColor: 'white' }}>
      <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen}/>
      <Sidebar isOpen={isSidebarOpen}  />
      
      <Header  />
      <Home/>
  
      
    </div>
 
  );
};

export default Homepage;

