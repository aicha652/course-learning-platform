import { useState, useEffect } from "react"
import Dashboard from "./Dashboard"
import { FaPencilAlt } from "react-icons/fa"
import { MdDelete } from "react-icons/md"


export default function AdminCourses() {
    const[allCourses, setAllCourses] = useState([])
    
    useEffect(() =>{
        const existingCourse = JSON.parse(localStorage.getItem("courses"))
        
        setAllCourses(existingCourse)
    }, [])

    return(
        <>
          <Dashboard />
          <div style={{ marginLeft: "250px" }}>
            <p>Courses Pages</p>
           {allCourses.length == 0 ?
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
                              <MdDelete />
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