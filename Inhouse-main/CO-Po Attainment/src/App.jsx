import 'bootstrap/dist/css/bootstrap.min.css';
import AddTeacherForm from './screens/admin/AddTeacherForm'
import axios from 'axios';
import Homepage from './screens/homepage/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import Login from './screens/login/register/Login';
import CourseOutcome from './screens/Course/CourseOutcomeTable';
import CourseObjectiveTable from './screens/Course/CourseObjectiveTable';
import PsoTable from './screens/PSO/PsoTable';
import Logout from './screens/login/Logout';
import { Toaster } from 'react-hot-toast';
import ProtectedRoute from './Components/ProtectedRoute';
import SubjectPage from './Components/Subject/SubjectPage';


axios.defaults.baseURL="http://localhost:8000"
axios.defaults.withCredentials=true

function App() {
  
  return (
    <Router>
      <div className='vh-100 vw-100 container-fluid'>
      <Toaster position="bottom-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<ProtectedRoute><Homepage /></ProtectedRoute>} />
                    <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
                    <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
                    <Route path="/addteacher" element={<ProtectedRoute><AddTeacherForm /></ProtectedRoute>} />
                    <Route path="/admin" element={<ProtectedRoute><AddTeacherForm /></ProtectedRoute>} />
                    <Route path="/cout" element={<ProtectedRoute><CourseOutcome /></ProtectedRoute>} />
                    <Route path="/cobj" element={<ProtectedRoute><CourseObjectiveTable /></ProtectedRoute>} />
                    <Route path="/pso" element={<ProtectedRoute><PsoTable /></ProtectedRoute>} />
                    <Route path="/subject/:subject" element={<ProtectedRoute><SubjectPage/></ProtectedRoute>} />
    </Routes>
    
    {/* <Login/> */}
     {/* <AddSubjects /> */}
       {/* <Header /> */}
      {/* <StudentDetail />  */}
      

    </div>
    </Router>
  );

}

export default App
