import Navbar from "../components/Navbar.js";
import photOne from "../assets/e-learningOne.jpg"
import photTwo from "../assets/e-learningTwo.jpg"
import '../styles/About.css'
import Footer from "../components/Footer.js";

export default function About() {
    return(
        <div>
            <Navbar />
            <div className="aboutContainer" >
              <div className="sectionOne">  
                <div>
                    <h3>Our Mission</h3>
                    <p>
                        Our mission is to make high-quality education accessible to everyone, everywhere.
                        We aim to empower learners by providing engaging, interactive, and practical courses 
                        designed to build real-world skills.We believe that learning should be flexible, 
                        inclusive, and driven by curiosity. Whether you're a student, a professional, or
                        a lifelong learner, our platform is here to support your growth — at your pace, 
                        on your terms.
                        Together, we’re building a future where knowledge is a right, not a privilege.
                    </p>
                </div>
                <div>
                    <img
                     style={{ width: "500px", marginRight: "50px", borderRadius: "50%", marginTop: "10px", height: "250px"}} 
                     src={photOne} 
                     alt="imageOne"
                    />
                </div>
              </div>
              <div className="sectionTwo" >
                <div>
                    <img
                     style={{ width: "500px", marginRight: "50px", borderRadius: "50%", marginTop: "30px", height: "250px"}}  
                     src={photTwo} 
                    />
                </div>
                <div>
                    <h3>Our Story</h3>
                    <p>
                        Our Platform was born out of a simple but powerful idea: learning should
                        be easy, enjoyable, and accessible to all.It all started when our founders
                        noticed how many passionate learners struggled to find resources that truly
                        helped them grow — whether due to cost, language barriers, or lack of support.
                        With a background in technology and education, they decided to take action.
                        What began as a small initiative to share knowledge online has now evolved
                        into a full e-learning platform — built with love, guided by feedback, and
                        powered by a community of learners and educators from all walks of life.
                    </p>
                </div>
              </div>
            </div>
            <Footer />
        </div>
    )
}