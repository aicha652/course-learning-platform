import { useState, useEffect } from "react"
import Dashboard from "./Dashboard"


export default function AdminCourses() {
    const[existingCourses, setExistingCourses] = useState([])
    
    useEffect(() =>{
        //console.log(localStorage.getItem("courses"))
        const anotherCourse = JSON.parse(localStorage.getItem("courses"))
        console.log(anotherCourse)
        setExistingCourses(anotherCourse)
        console.log(existingCourses)
    }, [])

    return(
        <>
          <Dashboard />
          <div style={{ marginLeft: "250px" }}>
            <p>Courses Pages</p>
           {existingCourses.length == 0 ?
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
                    </tr>
                </thead>
                <tbody>
                    {existingCourses.map((course, index) =>{
                        <tr key={index}>
                            <td>{course.title}</td>
                            <td>{course.description}</td>
                            <td>{course.image}</td>
                            <td>{course.video}</td>
                            <td>{course.file}</td>
                            <td>{course.category}</td>
                            <td>{course.duration}</td>
                            <td>{course.level}</td>
                        </tr>
                    })}
                </tbody>
              </table>)
           }
          </div>
        </>
    )
}