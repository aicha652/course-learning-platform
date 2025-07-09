import "../styles/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react"

export default function() {
    const isLogged = JSON.parse(localStorage.getItem("isLogged"))
    const navigate = useNavigate()

    function handleLogout() {
        localStorage.removeItem("isLogged")
        navigate("../login")
    }


    return(
        <div className="container">
            <Link to="/" className="nav-link"><h5>Home</h5></Link>
            <Link to="/about" className="nav-link"><h5>About Us</h5></Link>
            <Link to="/courses" className="nav-link"><h5>Courses</h5></Link>
            <Link to="/contact" className="nav-link"><h5>Contact</h5></Link>
            {isLogged ? 
                (<button onClick={handleLogout} >Logout</button>)
                   :
                (<Link to="/login" className="nav-link"><button>Login</button></Link>)        
            }
        </div>
    )
}