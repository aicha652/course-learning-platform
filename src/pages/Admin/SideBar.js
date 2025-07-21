import "../../styles/Sidebar.css"
import { RiBookShelfFill } from "react-icons/ri";
import { LiaSwatchbookSolid } from "react-icons/lia";
import { FaUsersBetweenLines } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AdminNavBar from "./AdminNavBar";



export default function SideBar() {
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
           <AdminNavBar />
           <div className="sidebar">
                <NavLink to="/dashboard" className={({isActive}) => isActive? "link active" : "link"} >
                <h4><MdDashboard /> Dashboard</h4>
                </NavLink>

                <NavLink to="/adminCourses" className={({isActive})=>isActive? "link active" : "link"}>
                <h4><RiBookShelfFill /> All Courses</h4>
                </NavLink>

                <NavLink to="/AddCourse" className={({isActive}) => isActive? "link active" : "link"}>
                <h4><LiaSwatchbookSolid /> Add Course</h4>
                </NavLink>

                <NavLink to="/Users" className={({isActive}) => isActive? "link active" : "link"}>
                <h4 style={{ marginLeft:"-70px" }} ><FaUsersBetweenLines /> Users</h4>
                </NavLink>

                
                <h4 style={{ marginLeft:"-63px", color: "#029cf5" }} onClick={handleLogout} ><HiOutlineLogout />Logout</h4>
           </div>
        </>
    )
}