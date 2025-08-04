import Navbar from "../components/Navbar";
import "../styles/Courses.css"
import { FaGraduationCap } from "react-icons/fa6";

export default function Courses() {
    const courses = JSON.parse(localStorage.getItem("courses")) || []
    return(
        <div>
            <Navbar />
            <div className="content">
                <div>
                    <FaGraduationCap style={{ marginLeft: "-10px", marginTop: "22px", fontSize: "20px" }} />
                    <h3>Explore Our Courses</h3>
                </div>
                <div>
                    <p>
                        Welcome to the learning hub!
                        Browse our selection of practical and engaging courses designed to help you grow your skills and achieve your learning goals.
                        Whether you're just getting started or looking to level up, there's something here for everyone.
                        Start exploring and enroll in a course that fits your interests!
                    </p>
                </div>
            </div>
            <div className="courses">
            {courses.map((course) => {
                return(
                    <div className="card">
                        <p>{course.title}</p>
                    </div>
                ) 
            })
            }
            </div>
        </div>
    )
}