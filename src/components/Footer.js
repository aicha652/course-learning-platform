import "../styles/Footer.css"
import logo from "../assets/Mylogo.png"
import { ImFacebook2 } from "react-icons/im"
import { GrLinkedin } from "react-icons/gr"
import { SiYoutubeshorts } from "react-icons/si";
import { SiGmail } from "react-icons/si";


export default function Footer() {
    return(
        <div className="footerContainer">
            <div style={{ marginLeft: "30px" }}>
                <img 
                 src={logo} 
                 alt="logo" 
                 style={{ width: "100px", height: "100px", marginTop: "15px", marginLeft: "-300px"}}
                />
                <p style={{ width: "350px", marginLeft: "-30px", fontSize: "16px", textAlign: "left" }}>
                    We are a modern e-learning platform committed to making education accessible, 
                   flexible, and impactful. Learn at your own pace, anytime, anywhere.
                </p>
                <div className="icons">
                    <ImFacebook2 />
                    <GrLinkedin />
                    <SiYoutubeshorts />
                    <SiGmail />
                </div>
            </div>
            <div style={{ marginTop: "15px" }}>
                <h2 style={{ color: "blue" }}>Popular Courses</h2>
                <p>Frontend Dev</p>
                <p>Backend Dev</p>
                <p>Full Stack Dev</p>
                <p>Data Sience</p>
            </div>
            <ul className="sectionThree">
                <h2>Follow Us On</h2>
                <li className="item">Facebook</li>
                <li className="item">Instagram</li>
                <li className="item">Twitter</li>
                <li className="item">Linkedin</li>
            </ul>
        </div>
    )
}