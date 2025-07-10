import "../../styles/AddCourse.css"
import Dashboard from "./Dashboard"
import { useState } from "react"


export default function AddCourse() {
    const[inputForms, setInputForms] = useState({
        title: "",
        description: "",
        image: "",
        video: "",
        file: "",
        category: "",
        duration: "",
        level: ""
    })

    const[courses, setCourses] = useState([])

    const[imageUrl, setImageUrl] = useState(null)
    //const[pdfUrl, setPdfUrl] = useState(null)
    
    function handleImageChange(event) {
        const imageFile = event.target.files[0]
        setInputForms({...inputForms, image: imageFile})
        setImageUrl(URL.createObjectURL(imageFile))
    }

    function handleSubmitClick(event) {
        event.preventDefault()

        const newCourse = {
            title: inputForms.title,
            description: inputForms.description,
            image: inputForms.image,
            video: inputForms.video,
            file: inputForms.file,
            category: inputForms.category,
            duration: inputForms.duration,
            level: inputForms.level
        }
        setCourses([...courses, newCourse])
        localStorage.setItem("courses", JSON.stringify(courses))
        alert("course added successfully")
        console.log(courses)
    }

    return(
        <>
           <Dashboard />
           <div>
                <form 
                 onSubmit={handleSubmitClick}
                >
                    <input 
                     type="text" 
                     placeholder="Title"
                     value={inputForms.title}
                     onChange={(event) =>{
                        setInputForms({...inputForms, title: event.target.value })
                     }}
                     required
                    />

                    <textarea
                     placeholder="description"
                     value={inputForms.description}
                     onChange={(event) => {
                        setInputForms({...inputForms, description: event.target.value})
                     }}
                     required
                    />

                    <input 
                     type="file"
                     alt="course image"
                     accept="image/*"
                     onChange={handleImageChange}
                     required
                    />
                    
                    {imageUrl &&
                     <img 
                      src={imageUrl}
                      style={{ width: "200px", height: "auto", margin: "10px 0" }}
                     />
                    }

                    <input
                     type="url" 
                     placeholder="Video"
                     value={inputForms.video}
                     onChange={(event) =>{
                        setInputForms({...inputForms, video: event.target.value})
                     }} 
                     required
                    />

                    <input
                     type="file"
                     accept="application/pdf"
                     onChange={(event) => {
                        setInputForms({...inputForms, file: event.target.files[0]})
                     }}
                     required
                    />

                    <select 
                     value={inputForms.category}
                     onChange={(event) =>{
                        setInputForms({...inputForms, category: event.target.value})
                     }}
                     required
                    >
                        <option value="">Select Category</option>
                        <option value="programming">Programming</option>
                        <option value="design">Design</option>
                        <option value="language">Language</option>
                    </select>

                    <input 
                     type="number" 
                     placeholder="Duration in (minutes)" 
                     value={inputForms.duration}
                     onChange={(event) => {
                        setInputForms({...inputForms, duration: event.target.value})
                     }}
                     required
                    />

                    <select
                     value={inputForms.level}
                     onChange={(event) => {
                        setInputForms({...inputForms, level:event.target.value})
                     }}
                     required
                    >
                        <option value="">Select Level</option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                    </select>
                    <button>Add</button>

                </form>
           </div>
        </>
    )
}