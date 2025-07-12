import Navbar from "../components/Navbar"
import { useNavigate } from "react-router-dom"
import {useEffect} from "react"

export default function Profile() {
    const user = JSON.parse(localStorage.getItem("currentUser"))
    const isLogged = JSON.parse(localStorage.getItem("isLogged"))
    const navigate = useNavigate()

    useEffect(()=>{
        if(!isLogged){
            navigate("../login")
        }
    },[navigate])

    return(
        <>
           <Navbar />
           <div style={{ marginTop: "100px" }}>
            <h2>Welcome, {user.name}</h2>
            <p>Email: {user.email}</p>
           </div> 
        </>
    )
}