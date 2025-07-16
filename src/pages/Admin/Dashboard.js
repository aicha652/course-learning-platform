import SideBar from "./SideBar";
import { PiUsersThreeLight } from "react-icons/pi";
import { GiSpellBook } from "react-icons/gi";
import "../../styles/Dashboard.css"


export default function Dashboard() {
    const storedUsers = JSON.parse(localStorage.getItem("users"))
    const numberOfUsers = storedUsers.length

    const storedCourses = JSON.parse(localStorage.getItem("courses"))
    const numberOfCourses = storedCourses.length

    return(
        <>
           <SideBar />
           <div className="cards">
                <div className="card">
                    <div className="Titles">
                        <p>Users</p>
                        <p style={{ marginLeft: "45px", marginTop: "45px" }}><PiUsersThreeLight /></p>
                    </div>
                    <div style={{ marginLeft: "-350px", marginTop: "30px" }}>
                        <h4>{numberOfUsers}</h4>
                    </div>
                </div>

                <div className="card">
                    <div className="Titles">
                        <p>Courses</p>
                        <p style={{ marginLeft: "45px", marginTop: "45px" }}><GiSpellBook /> </p>
                    </div>
                    <div style={{ marginLeft: "-350px", marginTop: "30px" }}>
                        <h4>{numberOfCourses}</h4>
                    </div>
                </div>
           </div>
        </>
    )
}