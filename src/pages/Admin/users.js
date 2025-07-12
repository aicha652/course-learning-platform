import Dashboard from "./Dashboard";
import { useState, useEffect } from "react"

export default function Users() {
    const[allUsers, setAllUsers] = useState([])

    useEffect(()=>{
        const existingUsers = JSON.parse(localStorage.getItem("users"))
        setAllUsers(existingUsers)
    },[])

    console.log(allUsers)

    return(
        <>
          <Dashboard />
          <div>
               {allUsers.length == 0 ?
                (<div></div>) 
                     :
                (<div style={{ marginLeft: "250px", marginTop: "80px" }}>
                    <table>
                        <thead>
                            <tr>
                                <td>Index</td>
                                <td>Name</td>
                                <td>Email</td>
                            </tr>
                        </thead>
                        {allUsers.map((user, index) => {
                            return(
                                <tbody>
                                    <tr>
                                        <td>{index}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                    </tr>
                                </tbody>
                            )
                        })}
                    </table>
                </div>)
               }
          </div>
        </>
    )
}