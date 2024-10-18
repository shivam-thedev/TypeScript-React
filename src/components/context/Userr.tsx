import { useContext } from "react"
import { UserContext } from "./UserContext"

export const Userr = ()=>{
    const userContext=useContext(UserContext)
    const handleLogin=()=>{
        if(UserContext){
            userContext.setUser({
                name:"Shivam",
                email:"example@gmail.com"
            })
        }
    }
    const handleLogout=()=>{
        if(UserContext){
            userContext.setUser(null)
        }
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {userContext.user?.name} and email is {userContext.user?.email}</div>
        </div>
    )
}