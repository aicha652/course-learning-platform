import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import eLearning from "../assets/e-learningBg.jpg"
import "../styles/Home.css"
import { Link } from "react-router-dom";
import { PiTarget } from "react-icons/pi";
import { PiLampPendantLight } from "react-icons/pi";
import { PiBrainLight } from "react-icons/pi";

export default function Home() {
    return(
        <div className="img-container">
            <img src={eLearning}/>
            <Navbar />
            <div className="Text">
                <h1>Midade AI Company AI & Data Experts</h1>
                <h4>
                    A Saudi limited liability company specialized in providing comprehensive and
                    integrated artificial intelligence solutions, with a special focus on supporting
                    the Arabic language and meeting the needs of markets in the Middle East and North
                    Africa region.
                </h4>
                <Link to="../contact"><button>Contact Us</button></Link>
            </div>
            <div className="ValuesSection">
                <p>Core Values</p>
                <h5>
                   Our core values reflect our belief that learning should be accessible, 
                   empowering, and driven by real purpose. We strive to create a space where
                   learners of all backgrounds feel supported, inspired, and equipped with
                   the tools they need to grow — not just academically, but personally and
                   professionally.
                </h5>
                <div className="cards">
                    <div className="card">
                        <PiTarget />
                        <h6>Learner-Centered Focus</h6>
                        <h5>We prioritize the needs, goals, and success of every learner by
                            creating accessible, engaging, and personalized learning experiences.
                        </h5>
                    </div>
                    <div className="card">
                        <PiLampPendantLight />
                        <h6>Continuous Innovation</h6>
                        <h5>We embrace innovation and adapt emerging technologies to
                            deliver modern, effective, and interactive education.</h5>
                    </div>
                    <div className="card">
                        <PiBrainLight />
                        <h6 style={{ fontSize: "19px" }}>Knowledge Empowerment</h6>
                        <h5>Our mission is to empower learners with practical skills,
                            critical thinking, and lifelong learning habits that prepare
                            them for real-world challenges.</h5>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}