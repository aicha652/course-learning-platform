import "../../styles/Dashboard.css"
import { RiBookShelfFill } from "react-icons/ri";
import { LiaSwatchbookSolid } from "react-icons/lia";
import { FaUsersBetweenLines } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom"


export default function Dashboard() {
    const location = useLocation()

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
                <h4 style={{ marginLeft:"-45px" }} ><FaUsersBetweenLines /> Users</h4>
                <h4 style={{ marginLeft:"-30px" }} ><IoSettings /> Settings</h4>
           </div>
        </>
    )
}