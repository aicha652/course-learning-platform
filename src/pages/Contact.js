import Navbar from "../components/Navbar";
import contact from "../assets/contact-us.png"
import "../styles/Contact.css"
import contcatUs from "../assets/contactBg.jpg"
import Footer from "../components/Footer";
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect, useState } from "react"

export default function Contact() {

    const[inputs, setInputs] = useState({
        id: Date.now(),
        name: "",
        email: "",
        message: ""
    })

    useEffect(() => {
        AOS.init({ duration: 1000 }); 
    }, []);

    function handleSubmitClick(event) {
        event.preventDefault()
        const newContact = {
            id: Date.now(),
            name: inputs.name,
            email: inputs.email,
            message: inputs.message
        }
        const storedContacts = JSON.parse(localStorage.getItem("contacts")) || []
        const updatedContacts = [...storedContacts, newContact]
        localStorage.setItem("contacts", JSON.stringify(updatedContacts))
        alert("your Message has sucessfully send")
    }

    return(
        <div>
            <Navbar />
            <div className="section">
                <img src={contact} />
                <p style={{ marginTop: "-200px", fontSize: "60px", fontWeight: "700"}}>Contact Us</p>
            </div>
            <div className="contactContainer" data-aos="fade-up">
                <div className="sectionOne">
                    <form
                     onSubmit={(event) =>{handleSubmitClick(event)}} 
                     data-aos="fade-up"
                    >
                        <p>Contact Us</p>
                        <input 
                         type="text"
                         placeholder="Name"
                         data-aos="fade-up"
                         value={inputs.name}
                         onChange={(event) => {setInputs({...inputs, name: event.target.value})}}
                        />
                        <input
                         type="email"
                         placeholder="Email"
                         data-aos="fade-up"
                         value={inputs.email}
                         onChange={(event) => {setInputs({...inputs, email: event.target.value})}} 
                        />
                        <textarea
                         placeholder="Message"
                         data-aos="fade-up"
                         value={inputs.message}
                         onChange={(event) => {setInputs({...inputs, message: event.target.value})}}
                        />
                        <button data-aos="fade-up">Send</button>
                    </form>
                </div>
                <div className="sectionTwo" data-aos="fade-up">
                    <img 
                     src={contcatUs}
                     style={{ width: "410px",
                              marginTop: "40px",
                              height: "512px",
                              borderTopRightRadius: "40px",
                              boxShadow: "0px 4px 6px 3px rgba(128, 128, 128, 0.28)"
                            }}
                     data-aos="fade-up"
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}