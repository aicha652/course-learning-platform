import Dashboard from "./Dashboard";
import { useState } from "react"

export default function Users() {
    const[allUsers, setAllUsers] = useState([])

    const existingUsers = JSON.parse(localStorage.getItem("users"))
    setAllUsers(existingUsers)


    console.log(existingUsers)


    return(
        <>
          <Dashboard />
          <div>
               {allUsers.len}
          </div>
        </>
    )
}