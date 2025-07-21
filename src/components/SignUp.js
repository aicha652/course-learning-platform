import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
import "../styles/SignUp.css"
import { useState } from "react";

export default function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    function handleSignup(e) {
        e.preventDefault()

        const admin = {name: "aicha", email: "aicha@gmail.com", password: "1234", role: "admin"}

        const storedUsers = JSON.parse(localStorage.getItem("users")) || []
        const newUser = {
          name: name, 
          email: email, 
          password: password, 
          role:"user"}
        const updatedUsers = [...storedUsers, newUser]
        localStorage.setItem("users", JSON.stringify(updatedUsers))
        

        navigate("/login")
    }

    return(
        <>
          <Navbar />
          <div className="signupContainer">
            <form onSubmit={handleSignup}>
              <p>Sign Up</p>
              <label >Name: </label>
              <input 
               type="text" 
               value={name}
               onChange={(event) =>{
                setName(event.target.value)
               }}
               required
              />

              <label >Email: </label>
              <input 
               type="email"
               value={email}
               onChange={(event) =>{
                setEmail(event.target.value)
               }}
               required
              />

              <label style={{ marginLeft: "-240px" }} >Password: </label>
              <input 
               type="password"
               value={password}
               onChange={(event) =>{
                setPassword(event.target.value)
               }}
               required 
              />

              <button type="sumbit">Sign Up</button>

              <div className="detail" >
                <h5>Already have an account? <Link to="/login" className="link">Log In</Link> </h5>
              </div>
            </form>
          </div>
        </>
    )
}