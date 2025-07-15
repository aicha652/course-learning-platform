import { useState, useEffect } from "react"
import Dashboard from "./Dashboard"
import { FaPencilAlt } from "react-icons/fa"
import { MdDelete } from "react-icons/md"
import "../../styles/adminCourses.css"


export default function AdminCourses() {
    const[allCourses, setAllCourses] = useState([])
    const[showPopUp, setShowPopUp] = useState(false)
    const[editingCourse, setEditingCourse] = useState(null)
    const[previewImage, setPreviewImage] = useState(null)
    const[previewPdf, setPreviewPdf] = useState(null)

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

    function handleEdit(course) {
      setEditingCourse(course)
      setPreviewImage(course.image)
      setPreviewPdf(course.file)
    }


    function handleImageEdit(event) {
      const imageFile = event.target.files[0]
      const reader = new FileReader()

      reader.onload = () => {
        setEditingCourse({...editingCourse, image: reader.result})
        setPreviewImage(reader.result)
      }
      if(imageFile) reader.readAsDataURL(imageFile)
    }

    function handleEditClick() {
      const storedCourses = JSON.parse(localStorage.getItem("courses")) || []
      const editCourses = storedCourses.map((course, index) =>
        course.title == editingCourse.title ? editingCourse : course
      )

      localStorage.setItem("courses", JSON.stringify(editCourses))

      setAllCourses(editCourses)

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
                              <FaPencilAlt onClick={() => {handleEdit(course)}} />
                              {editingCourse &&
                              <div className="editForm">
                               <form onSubmit={handleEditClick} >
                                <input
                                 type="text" 
                                 value={editingCourse.title} 
                                 onChange={(event)=>{ setEditingCourse({...editingCourse, title: event.target.value}) }}
                                />
                                <textarea 
                                 value={editingCourse.description}
                                 onChange={(event) => {setEditingCourse({...editingCourse, description: event.target.value})}}
                                />
                                <input 
                                 type="file"
                                 accept="image/*"
                                 onChange={handleImageEdit}
                                />
                                {previewImage &&
                                 <img 
                                  src={previewImage} 
                                  alt="PreviewImage" 
                                  style={{ height: "100px", width: "150px", marginLeft: "10px" }}  
                                />
                                }
                                <input 
                                 type="url"
                                 value={editingCourse.video}
                                 onChange={(event) => {setEditingCourse({...editingCourse, video: event.target.value})}}
                                />
                                <input 
                                 type="file"
                                 accept="application/pdf"
                                 onChange={(event) => { 
                                  const pdfFile = event.target.files[0]
                                  const reader = new FileReader();

                                  reader.onload = () => {
                                    setEditingCourse({ ...editingCourse, file: reader.result });
                                    setPreviewPdf(reader.result);
                                  }
                                  if (pdfFile) reader.readAsDataURL(pdfFile);
                                  }}
                                />
                                <select 
                                 value={editingCourse.category}
                                 onChange={(event) => { setEditingCourse({...editingCourse, category: event.target.value}) }}
                                >
                                  <option value="">Select Category</option>
                                  <option value="programming">Programming</option>
                                  <option value="design">Design</option>
                                  <option value="language">Language</option>
                                </select>
                                <input
                                 type="number"
                                 value={editingCourse.duration}
                                 onChange={(event) =>{setEditingCourse({...editingCourse, duration: event.target.value})}} 
                                />
                                <select
                                 value={editingCourse.level}
                                 onChange={(event) => {setEditingCourse({...editingCourse, level: event.target.value})}}
                                >
                                  <option value="">Select Level</option>
                                  <option value="beginner">Beginner</option>
                                  <option value="intermediate">Intermediate</option>
                                  <option value="advanced">Advanced</option>
                                </select>

                                <button type="submit">Edit</button>
                               </form>
                              </div>
                              }  
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