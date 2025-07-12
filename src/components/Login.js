import "../styles/Login.css"
import Navbar from "./Navbar"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

export default function Login() {
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const navigate = useNavigate()

    function handleLogin(e) {
        e.preventDefault()
        
        const storedUsers = JSON.parse(localStorage.getItem("users")) || []
        
        const admin = {name: "aicha", email: "aicha@gmail.com", password: "1234", role: "admin"}
        localStorage.setItem("admin", JSON.stringify(admin))
        const storedAdmin = JSON.parse(localStorage.getItem("admin"))

        const loggedInUser = storedUsers.find((user) =>
          user.email == email && user.password == password
        )
      
        if(loggedInUser) {
            localStorage.setItem("currentUser", JSON.stringify(loggedInUser))
            localStorage.setItem("isLogged", "true")
            navigate("/profile")
        }else if(storedAdmin && storedAdmin.email == email && storedAdmin.password ==password && storedAdmin.role == "admin") {
            localStorage.setItem("isLogged", "true")
            navigate("/dashboard")
        }
        else {
            alert("Invalid email or password")
        }

    }


    return(
        <>
          <Navbar />
          <form onSubmit={handleLogin}>
           <div className="loginContainer">
              <p>Welcome back</p>
              <h6>Please Enter Your Details</h6>
              <label >Email: </label>
              <input 
               type="email"
               value={email}
               onChange={(event)=> {
                setEmail(event.target.value)
               }}
               required 
              />

              <label style={{ marginLeft: "-240px" }} >Password: </label>
              <input 
               type="password"
               value={password}
               onChange={(event)=> {
                setPassword(event.target.value)
               }}
               required 
              />

              <button>Login</button>

              <div className="detail" >
                <h5>Don't have an account? <Link to="/signup" className="link">Sign UP</Link> </h5>
              </div>
            </div>
          </form>
        </>
    )
}