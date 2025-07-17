import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import eLearning from "../assets/e-learningBg.jpg"
import "../styles/Home.css"
import { Link } from "react-router-dom";

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
            <Footer />
        </div>
    )
}