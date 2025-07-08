import "../styles/Navbar.css";
import { Link } from "react-router-dom";

export default function() {
    return(
        <div className="container">
            <Link to="/" className="nav-link"><h5>Home</h5></Link>
            <Link to="/about" className="nav-link"><h5>About Us</h5></Link>
            <Link to="/courses" className="nav-link"><h5>Courses</h5></Link>
            <Link to="/contact" className="nav-link"><h5>Contact</h5></Link>
            <Link to="/login" className="nav-link"><button>Login</button></Link> 
        </div>
    )
}