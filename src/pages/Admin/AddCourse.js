import "../../styles/AddCourse.css"
import { useState } from "react"
import SideBar from "./SideBar"


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

    //const [pdfBase64, setPdfBase64] = useState(null);

    let url = null
    
    function handleImageChange(event) {
        const imageFile = event.target.files[0]
        const urlImage = URL.createObjectURL(imageFile)
        setInputForms({...inputForms, image: urlImage})
        
        
        //const reader = new FileReader()

        //reader.onload = () => {
        //    setInputForms({...inputForms, image: reader.result})
        //}

        //if(imageFile) reader.readAsDataURL(imageFile)
      
    }

    function handleSubmitClick(event) {
        event.preventDefault()

        const newCourse = {
            id: Date.now(),
            title: inputForms.title,
            description: inputForms.description,
            image: inputForms.image,
            video: inputForms.video,
            file: inputForms.file,
            category: inputForms.category,
            duration: inputForms.duration,
            level: inputForms.level
        }
        const storedCourses = JSON.parse(localStorage.getItem("courses")) || []
        const updatedCourse = [...storedCourses, newCourse]
        localStorage.setItem("courses", JSON.stringify(updatedCourse))
        alert("course added successfully")

        console.log(newCourse)
    }

    return(
        <>
           <SideBar />
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
                    
                    {url &&
                     <img 
                      src={url}
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
                        const pdfFile = event.target.files[0]
                        const urlPdf = URL.createObjectURL(pdfFile)
                        setInputForms({...inputForms, file: urlPdf})

                        //const reader = new FileReader();
                        //reader.onload = () => {
                        //    setPdfBase64(reader.result); 
                        //}
                        //if (pdfFile) reader.readAsDataURL(pdfFile);
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