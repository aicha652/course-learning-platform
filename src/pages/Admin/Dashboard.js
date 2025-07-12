import "../../styles/Dashboard.css"
import { RiBookShelfFill } from "react-icons/ri";
import { LiaSwatchbookSolid } from "react-icons/lia";
import { FaUsersBetweenLines } from "react-icons/fa6";
import { RxDashboard } from "react-icons/rx";
import { HiOutlineLogout } from "react-icons/hi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";


export default function Dashboard() {
    const location = useLocation()
    const navigate = useNavigate()
    const isLogged = JSON.parse(localStorage.getItem("isLogged"))

    function handleLogout() {
        localStorage.removeItem("isLogged")
        navigate("../login")
    }

    useEffect(() =>{
        if(!isLogged) {
            navigate("../login")
        }
    }, [isLogged])

    return(
        <>
           <div className="dashboard">
                <Link to="/dashboard" className="link" >
                <h4 className={`main-container${location.pathname == "/dashboard"? "bg" : "normalbg"}`} ><RxDashboard />Dashboard</h4>
                </Link>
                <Link to="/adminCourses" className="link">
                <h4 className={`main-container${location.pathname == "/courses"? "bg" : "normalbg"}`} ><RiBookShelfFill /> All Courses</h4>
                </Link>
                <Link to="/AddCourse" ><h4><LiaSwatchbookSolid /> Add Course</h4></Link>
                <Link to="/Users"><h4 style={{ marginLeft:"-45px" }} ><FaUsersBetweenLines /> Users</h4></Link>
                <h4 style={{ marginLeft:"-30px" }} onClick={handleLogout} ><HiOutlineLogout />Logout</h4>
           </div>
        </>
    )
}