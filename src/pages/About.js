import Navbar from "../components/Navbar.js";
import '../styles/About.css'
import Footer from "../components/Footer.js";
import about from "../assets/aboutImage.jpg"
import solution from "../assets/solutionImage.jpg"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

export default function About() {

    useEffect(() => {
        AOS.init({ duration: 1000 }); 
    }, []);

    return(
        <div>
            <Navbar />
            <img src={about} style={{ width: "100%", height: "500px"}} />
            <p style={{ marginTop: "-250px", fontSize: "60px", fontWeight: "700"}}>About Us</p>
            <div className="solution">
                <img 
                 src={solution}
                 style={{ width: "450px", height: "300px", borderRadius: "10px" }} 
                 data-aos="fade-right"
                />
                <h3 data-aos="fade-left">Our Solutions</h3>
                <p data-aos="fade-left">We offer a wide range of digital learning solutions designed to meet the evolving needs of
                    learners and educators alike. From interactive video lessons and downloadable resources to
                    assessments, progress tracking, and personalized learning paths — our platform provides a
                    complete educational experience. Whether you're an individual seeking to upskill, an
                    organization looking to train employees, or an instructor aiming to share knowledge, our
                    solutions are flexible, scalable, and built to deliver real results.</p>
            </div>
            <div className="aboutContainer" >
                <div className="section" data-aos="zoom-in-right">
                    <h3>Our Mission</h3>
                    <hr />
                    <p>
                        Our mission is to make high-quality education accessible to everyone, everywhere.
                        We aim to empower learners by providing engaging, interactive, and practical courses 
                        designed to build real-world skills.We believe that learning should be flexible, 
                        inclusive, and driven by curiosity. Whether you're a student, a professional, or
                        a lifelong learner, our platform is here to support your growth at your pace, 
                        on your terms.
                        
                    </p>
                </div>
                <div className="section" data-aos="zoom-in-left">
                    <h3>Our Story</h3>
                    <hr />
                    <p>
                        Our Platform was born out of a simple but powerful idea: learning should
                        be easy, enjoyable, and accessible to all.It all started when our founders
                        noticed how many passionate learners struggled to find resources that truly
                        helped them grow whether due to cost, language barriers, or lack of support.
                        With a background in technology and education, they decided to take action.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}