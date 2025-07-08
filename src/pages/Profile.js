import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import Navbar from "../components/Navbar"

export default function Profile() {
    const user = JSON.parse(localStorage.getItem("user"))
    const navigate = useNavigate()

    useEffect(()=>{
        const isLogged = localStorage.getItem("isLogged")
        if(!isLogged){
            navigate("../login")
        }
    },[navigate])

    function handleLogout(){
        localStorage.removeItem("isLogged")
        navigate("../login")
    }

    return(
        <>
           <Navbar />
           <div>
            <h2>Welcome, {user?.name}</h2>
            <p>Email: {user?.email}</p>
            <button onClick={handleLogout}>Logout</button>
           </div> 
        </>
    )
}