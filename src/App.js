import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Courses from "./pages/Courses"
import Contact from './pages/Contact';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Profile from './pages/Profile';
import AddCourse from './pages/Admin/AddCourse';
import AdminCourses from './pages/Admin/adminCourses';
import Users from './pages/Admin/users';
import SideBar from './pages/Admin/SideBar';
import Dashboard from './pages/Admin/Dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sidebar" element={<SideBar />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/adminCourses" element={<AdminCourses />} />
        <Route path="/AddCourse" element={<AddCourse />} />
        <Route path="/Users" element={<Users />}/>
      </Routes>
    </div>
  );
}

export default App;
