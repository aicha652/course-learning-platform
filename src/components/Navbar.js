import "../styles/Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect } from "react"
import logo from "../assets/Mylogo.png"

export default function() {
    const isLogged = JSON.parse(localStorage.getItem("isLogged"))
    const navigate = useNavigate()

    function handleLogout() {
        localStorage.removeItem("isLogged")
        navigate("../login")
    }


    return(
        <div className="container">
           <div className="navlinks"> 
            <img src={logo} style={{ width: "75px", height: "80px", marginRight: "  280px", opacity: "0.5" }} />
            <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}><h5>Home</h5></NavLink>
            <NavLink to="/about" className={({isActive}) => isActive? "nav-link active-link" : "nav-link"}><h5>About Us</h5></NavLink>
            <NavLink to="/courses" className={({isActive}) => isActive? "nav-link active-link" : "nav-link"}><h5>Courses</h5></NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? "nav-link active-link" : "nav-link"}><h5>Contact</h5></NavLink>
            {isLogged ? 
                (<button onClick={handleLogout} >Logout</button>)
                   :
                (<NavLink to="/login"><button>Login</button></NavLink>)        
            }
           </div>
        </div>
    )
}