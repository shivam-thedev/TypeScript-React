import { useState } from "react"

export const LoggedIn = ()=>{
    const [isLoggedIn,setIsLoggedIn]=useState(false)
    const handleLogin=()=>{
        setIsLoggedIn(true)
    }
    const handleLogout=()=>{
        setIsLoggedIn(false)
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>{isLoggedIn? `User is logged in`:`logged out`}</div>
        </div>
    )
}