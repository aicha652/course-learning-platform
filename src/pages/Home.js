import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import eLearning from "../assets/e-learningBg.jpg"
import "../styles/Home.css"
import { Link } from "react-router-dom";
import { PiTarget } from "react-icons/pi";
import { PiLampPendantLight } from "react-icons/pi";
import { PiBrainLight } from "react-icons/pi";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { SiMinds } from "react-icons/si";
import { FaRegHandshake } from "react-icons/fa6";

export default function Home() {

    useEffect(() => {
        AOS.init({ duration: 1000 }); 
    }, []);
    return(
        <div className="img-container">
            <img src={eLearning}/>
            <Navbar />
            <div className="Text" data-aos="fade-left">
                <h1>Midade AI Company AI & Data Experts</h1>
                <h4>
                    A Saudi limited liability company specialized in providing comprehensive and
                    integrated artificial intelligence solutions, with a special focus on supporting
                    the Arabic language and meeting the needs of markets in the Middle East and North
                    Africa region.
                </h4>
                <Link to="../contact"><button>Contact Us</button></Link>
            </div>
            <div className="ValuesSection" data-aos="fade-up">
                <p>Core Values</p>
                <hr/>
                <h5>
                   Our core values reflect our belief that learning should be accessible, 
                   empowering, and driven by real purpose. We strive to create a space where
                   learners of all backgrounds feel supported, inspired, and equipped with
                   the tools they need to grow — not just academically, but personally and
                   professionally.
                </h5>
            </div>
            <div className="cards" style={{ marginLeft: "150px",width: "85%" }}>
                <div className="card" data-aos="fade-up">
                    <PiLampPendantLight />
                    <h6>Continuous Innovation</h6>
                    <h5>We embrace innovation and adapt emerging technologies to
                        deliver modern, effective, and interactive education.</h5>
                </div>
                <div className="card" data-aos="fade-up">
                    <PiBrainLight />
                    <h6 style={{ fontSize: "19px" }}>Knowledge Empowerment</h6>
                    <h5>Our mission is to empower learners with practical skills,
                        critical thinking, and lifelong learning habits that prepare
                        them for real-world challenges.</h5>
                </div>
                <div className="card" data-aos="fade-up">
                    <VscWorkspaceTrusted />
                    <h6 style={{ fontSize: "19px", marginLeft: "-100px" }}>Integrity & Trust</h6>
                    <h5>We uphold honesty, transparency, and ethical practices in
                        all our learning content, assessments, and interactions.</h5>
                </div>
                <div className="card" data-aos="fade-up">
                    <SiMinds />
                    <h6 style={{ fontSize: "19px", marginLeft: "-100px" }}>Growth Mindset</h6>
                    <h5>We foster a culture of learning not only for users but within our team,
                        continuously improving our platform and content based on feedback and
                        outcomes.</h5>
                </div>
                <div className="card" data-aos="fade-up">
                    <FaRegHandshake />
                    <h6 style={{ fontSize: "19px", marginLeft: "-100px" }}>Equity & Inclusion</h6>
                    <h5>We believe in equal opportunities for all. Our platform is committed to
                        inclusivity—regardless of background, ability, or location.</h5>
                </div>
                <div className="card" data-aos="fade-up">
                    <PiTarget />
                    <h6>Learner-Centered Focus</h6>
                    <h5 style={{ marginBottom: "-100px", marginTop: "-20px" }}>We prioritize the needs, goals, and success of every learner by
                        creating accessible, engaging, and personalized learning experiences.</h5>
                </div>
            </div>
            <Footer />
        </div>
    )
}