import { useState, useEffect } from "react"
import Dashboard from "./Dashboard"
import { FaPencilAlt } from "react-icons/fa"
import { MdDelete } from "react-icons/md"
import "../../styles/adminCourses.css"


export default function AdminCourses() {
    const[allCourses, setAllCourses] = useState([])
    const[showPopUp, setShowPopUp] = useState(false)

    useEffect(() =>{
        const existingCourse = JSON.parse(localStorage.getItem("courses"))
        
        setAllCourses(existingCourse)
    }, [])
    

    function handleDelete(IndexCourse) {
      const storedCourses = JSON.parse(localStorage.getItem("courses")) || []

      const filteredCourses = storedCourses.filter((_, index) => index !== IndexCourse)

      localStorage.setItem("courses", JSON.stringify(filteredCourses))

      setAllCourses(filteredCourses)

      console.log(allCourses)

      setShowPopUp(false)

    }


    

    return(
        <>
          <Dashboard />
          <div style={{ marginLeft: "250px" }}>
            <p>Courses Pages</p>
           {!allCourses ?
              (<p>No Course added yet</p>) 
                :
              (<table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Image</th>
                        <th>Video</th>
                        <th>File</th>
                        <th>Category</th>
                        <th>duration</th>
                        <th>Level</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {allCourses.map((course, index) =>{
                      return(
                        <tr key={index}>
                            <td style={{ color: "black" }} >{course.title}</td>
                            <td>{course.description}</td>
                            <td>
                              {course.image && <img src={course.image} alt="Course" width="80" />}
                            </td>
                            <td>
                             <a href={course.video} target="_blank" rel="noreferrer">Watch</a>
                            </td>
                            <td>
                             <a href={course.file} target="_blank" rel="noreferrer">PDF</a>
                            </td>
                            <td>{course.category}</td>
                            <td>{course.duration}</td>
                            <td>{course.level}</td>
                            <td>
                              <FaPencilAlt />
                              <MdDelete onClick={() =>{ setShowPopUp(true) }} />
                              {showPopUp &&
                               <div className="popup">                 
                                   <div className="buttons">
                                        Do you really want to delete this course?
                                        <button onClick={() => { setShowPopUp(false)}}>Cancel</button>
                                        <button onClick={()=>{handleDelete(index)}} >Delete</button>
                                   </div>
                               </div>
                               }
                            </td>
                        </tr>
                      )
                    })}
                </tbody>
              </table>)
           }
          </div>
        </>
    )
}